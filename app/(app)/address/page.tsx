import React, { Suspense } from "react";
import AddressView from "./AddressView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Address",
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
      <AddressView />
    </Suspense>
  );
}
