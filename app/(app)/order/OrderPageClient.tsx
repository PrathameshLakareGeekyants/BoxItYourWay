"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import OrderConfirmation from "./OrderConfirmation";
import OrderReview from "./OrderReview";
import Spinner from "@/components/Spinner";
import { razorpayOrder, verifyRazorpayOrder } from "@/lib/service/order";
import { useCart } from "@/hooks/cart";
import { useDeliveryAddressById } from "@/hooks/delivery";
import { useOrderTagById, usePreferenceById, useWrapById } from "@/hooks/order";

type RazorpayPaymentDetails = {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
};

type VerifyRazorpayOrderInput = RazorpayPaymentDetails & {
  deliveryId: string;
  wrapId: string;
  orderTagId: string;
  preferenceId: string;
};

function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (window.Razorpay) return resolve(true);
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export default function OrderPage() {
  const searchParams = useSearchParams();
  const addressId = searchParams.get("addressId");
  const orderTagId = searchParams.get("orderTagId");
  const wrapId = searchParams.get("wrapId");
  const preferenceId = searchParams.get("preferenceId");
  const queryClient = useQueryClient();

  const [placedOrder, setPlacedOrder] = useState<any>(null);
  const [paymentDone, setPaymentDone] = useState(false);
  const [isPaymentLoading, setIsPaymentLoading] = useState(false);

  const { data: cartData, isLoading: isCartLoading } = useCart();

  const { data: address, isLoading: isAddressLoading } =
    useDeliveryAddressById(addressId);
  const { data: orderTagData, isLoading: isOrderTagLoading } =
    useOrderTagById(orderTagId);
  const { data: preferenceData, isLoading: isPreferenceLoading } =
    usePreferenceById(preferenceId);
  const { data: wrapData, isLoading: isWrapLoading } = useWrapById(wrapId);

  const verifyMutation = useMutation({
    mutationFn: verifyRazorpayOrder,
    onSuccess: (data) => {
      setPlacedOrder(data.order);
      setPaymentDone(true);
      toast.success("Payment successful and order confirmed!");
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (error: any) => {
      toast.error(error?.message || "Payment verification failed.");
    },
  });

  const totalOrderOptionPrice =
    (orderTagData?.price ?? 0) +
    (wrapData?.price ?? 0) +
    (preferenceData?.price ?? 0);

  const handleStartPayment = async () => {
    if (!cartData?.cart || cartData.cart.cartItem.length === 0) {
      toast.error("Cart is empty.");
      return;
    }
    if (!addressId || !orderTagId || !preferenceId || !wrapId) {
      toast.error("Some required fields are missing.");
      return;
    }

    try {
      setIsPaymentLoading(true);

      let totalAmount = cartData.cart.cartItem.reduce(
        (sum: number, item: any) => {
          if (item.product) {
            return sum + item.product.price * item.quantity;
          }
          if (item.combo) {
            return sum + item.combo.totalPrice;
          }

          return sum;
        },
        0
      );

      const finaleAmount = totalAmount + totalOrderOptionPrice;

      const razorpayOrderResponse = await razorpayOrder({
        amount: finaleAmount,
      });
      const razorpayOrderId = razorpayOrderResponse.id;

      const loaded = await loadRazorpayScript();
      if (!loaded) {
        toast.error("Failed to load Razorpay SDK");
        setIsPaymentLoading(false);
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: totalAmount * 100,
        currency: "INR",
        order_id: razorpayOrderId,
        name: "BoxItYourWay",
        description: "Order Payment",
        handler: function (response: RazorpayPaymentDetails) {
          handlePaymentSuccess(response);
        },
        prefill: {
          name: "John Doe",
          email: "johndoe@example.com",
          contact: "9999999999",
        },
        theme: { color: "#3399cc" },
        modal: {
          ondismiss: () => {
            setIsPaymentLoading(false);
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error: any) {
      toast.error(error.message || "Error initiating payment.");
      setIsPaymentLoading(false);
    }
  };

  const handlePaymentSuccess = (paymentDetails: RazorpayPaymentDetails) => {
    if (!addressId) {
      toast.error("Delivery address missing.");
      setIsPaymentLoading(false);
      return;
    }

    setIsPaymentLoading(false);
    verifyMutation.mutate({
      ...paymentDetails,
      deliveryId: addressId,
      wrapId,
      orderTagId,
      preferenceId,
    } as VerifyRazorpayOrderInput);
  };

  if (
    isCartLoading ||
    isAddressLoading ||
    isOrderTagLoading ||
    isPreferenceLoading ||
    isWrapLoading
  ) {
    return (
      <div className="max-w-3xl mx-auto mt-16 text-center text-lg">
        Loading...
      </div>
    );
  }

  if (isPaymentLoading) {
    return (
      <div className="max-w-3xl mx-auto mt-16">
        <Spinner />
      </div>
    );
  }

  if (!addressId || !address?.deliveryInfo) {
    return (
      <div className="max-w-3xl mx-auto mt-16 text-center">
        No delivery address selected.
      </div>
    );
  }

  if (paymentDone && placedOrder) {
    return (
      <OrderConfirmation
        order={placedOrder}
        orderTagData={orderTagData}
        wrapData={wrapData}
        preferenceData={preferenceData}
      />
    );
  }

  if (!cartData?.cart || cartData.cart.cartItem.length === 0) {
    return (
      <div className="max-w-3xl mx-auto mt-16 text-center">
        Your cart is empty.
      </div>
    );
  }

  return (
    <OrderReview
      cart={cartData.cart}
      address={address.deliveryInfo}
      orderOptionsPrice={totalOrderOptionPrice}
      isPlacingOrder={verifyMutation.isPending || isPaymentLoading}
      onPlaceOrder={handleStartPayment}
      orderTagData={orderTagData}
      wrapData={wrapData}
      preferenceData={preferenceData}
    />
  );
}
