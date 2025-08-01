"use client";

import { useState } from "react";

export default function RazorpayCheckout({
  orderId,
  amount,
  onPaymentSuccess,
}: {
  orderId: string;
  amount: number;
  onPaymentSuccess: (response: any) => void;
}) {
  const [loading, setLoading] = useState(false);

  const loadRazorpayScript = () => {
    return new Promise<boolean>((resolve) => {
      if (window.Razorpay) return resolve(true);
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const openCheckout = async () => {
    setLoading(true);
    const loaded = await loadRazorpayScript();
    if (!loaded) {
      alert("Failed to load Razorpay SDK");
      setLoading(false);
      return;
    }

    // Call your backend API to create razorpay order
    const response = await fetch("/api/razorpay-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });
    const data = await response.json();

    if (!response.ok) {
      alert("Server error: " + data.error);
      setLoading(false);
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: data.amount,
      currency: data.currency,
      order_id: data.id,
      name: "Your Store Name",
      description: "Payment for Order " + orderId,
      handler: function (res: any) {
        onPaymentSuccess(res);
        setLoading(false);
      },
      theme: { color: "#3399cc" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <button
      onClick={openCheckout}
      disabled={loading}
      className="px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 disabled:opacity-50"
    >
      {loading ? "Processing..." : "Pay Now"}
    </button>
  );
}
