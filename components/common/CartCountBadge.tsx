"use client";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { getCartItems } from "@/lib/service/cart";

export default function CartCountBadge() {
  const { data: session, status } = useSession();

  const { data } = useQuery({
    queryKey: ["cart"],
    queryFn: getCartItems,
    enabled: status === "authenticated",
  });

  if (status !== "authenticated") return null;

  const cartCount =
    data?.cart?.cartItem?.reduce(
      (acc: number, curr: any) => acc + (curr.quantity ?? 1),
      0
    ) || 0;

  if (!cartCount) return null;

  return (
    <span
      className="absolute -top-1 -right-2 min-w-4 h-4 px-1 flex items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow z-10"
      style={{ fontSize: "0.8rem" }}
      aria-label="Cart item count"
    >
      {cartCount}
    </span>
  );
}
