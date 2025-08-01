import {
  ORDER_API,
  RAZORPAY_ORDER_API,
  RAZORPAY_VERIFY_ORDER_API,
} from "@/constants";
import { postData } from "../network/post";
import { fetchData } from "../network/fetcher";

export async function placeOrder({ deliveryId }: { deliveryId: string }) {
  return postData(`${ORDER_API}`, { deliveryId });
}

export async function razorpayOrder({ amount }: { amount: number }) {
  return postData(RAZORPAY_ORDER_API, { amount });
}

export async function verifyRazorpayOrder({
  razorpay_payment_id,
  razorpay_order_id,
  razorpay_signature,
  deliveryId,
}: {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
  deliveryId: string;
}) {
  return postData(RAZORPAY_VERIFY_ORDER_API, {
    razorpay_payment_id,
    razorpay_order_id,
    razorpay_signature,
    deliveryId,
  });
}

export async function getOrders() {
  return fetchData(`${ORDER_API}`);
}
