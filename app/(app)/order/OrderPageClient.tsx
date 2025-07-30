"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { getCartItems } from "@/lib/service/cart";
import { fetchDeliveryInfoById } from "@/lib/service/delivery";
import { toast } from "sonner";

import OrderConfirmation from "./OrderConfirmation";
import OrderReview from "./OrderReview";

import { razorpayOrder, verifyRazorpayOrder } from "@/lib/service/order";

type RazorpayPaymentDetails = {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
};

type VerifyRazorpayOrderInput = RazorpayPaymentDetails & { deliveryId: string };

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
  const queryClient = useQueryClient();

  const [placedOrder, setPlacedOrder] = useState<any>(null);
  const [paymentDone, setPaymentDone] = useState(false);

  const { data: cartData, isLoading: isCartLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: getCartItems,
  });

  const { data: address, isLoading: isAddressLoading } = useQuery({
    queryKey: ["deliveryInfo", addressId],
    queryFn: () => fetchDeliveryInfoById(addressId!),
    enabled: !!addressId,
  });

  // Mutation to verify payment and create order in DB
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

  // Handle clicking "Pay Now" to initiate Razorpay payment
  const handleStartPayment = async () => {
    if (!cartData?.cart || cartData.cart.cartItem.length === 0) {
      toast.error("Cart is empty.");
      return;
    }
    if (!addressId) {
      toast.error("Delivery address missing.");
      return;
    }

    try {
      const totalAmount = cartData.cart.cartItem.reduce(
        (sum: number, item: any) => {
          if (item.product) {
            return sum + item.product.price * item.quantity;
          }
          if (item.combo) {
            // Use pre-calculated discounted price from combo
            return sum + item.combo.totalPrice;
          }
          return sum;
        },
        0
      );

      // Create Razorpay order on backend
      const razorpayOrderResponse = await razorpayOrder({
        amount: totalAmount,
      });
      const razorpayOrderId = razorpayOrderResponse.id;

      // Load Razorpay checkout script
      const loaded = await loadRazorpayScript();
      if (!loaded) {
        toast.error("Failed to load Razorpay SDK");
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
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error: any) {
      toast.error(error.message || "Error initiating payment.");
    }
  };

  const handlePaymentSuccess = (paymentDetails: RazorpayPaymentDetails) => {
    if (!addressId) {
      toast.error("Delivery address missing.");
      return;
    }
    verifyMutation.mutate({
      ...paymentDetails,
      deliveryId: addressId,
    } as VerifyRazorpayOrderInput);
  };

  if (isCartLoading || isAddressLoading) {
    return (
      <div className="max-w-3xl mx-auto mt-16 text-center text-lg">
        Loading...
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
    return <OrderConfirmation order={placedOrder} />;
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
      isPlacingOrder={verifyMutation.isPending}
      onPlaceOrder={handleStartPayment}
    />
  );
}
