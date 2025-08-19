import React, { Suspense } from "react";
import OrderPageClient from "./OrderPageClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order",
};

export default function OrderPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-3xl mx-auto mt-16 text-center">
          Loading order page...
        </div>
      }
    >
      <OrderPageClient />
    </Suspense>
  );
}
