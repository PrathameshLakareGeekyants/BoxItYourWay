"use client";
import { getCartItems } from "@/lib/service/cart";
import { useQuery } from "@tanstack/react-query";
import CartComponent from "./CartComponent";
import CartSummary from "./CartSummary";

export default function CartPage() {
  const { data } = useQuery({ queryKey: ["cart"], queryFn: getCartItems });
  const cart = data?.cart || { cartItem: [] };

  return (
    <div className="flex flex-col lg:flex-row gap-8 container mx-auto py-10 px-4">
      <div className="flex-1">
        <CartComponent cart={cart} />
      </div>
      <div className="w-full md:mx-auto md:w-[350px] lg:w-[400px] shrink-0 lg:mt-22">
        <CartSummary cart={cart} />
      </div>
    </div>
  );
}
