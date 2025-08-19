import React, { Suspense } from "react";
import AddressView from "./AddressView";

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
