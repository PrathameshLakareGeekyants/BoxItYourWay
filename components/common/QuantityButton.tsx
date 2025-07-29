"use client";
import { updateQuantity } from "@/lib/service/cart";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

type Props = {
  cartId: string;
  comboId?: string;
  productId?: string;
  currentQuantity: number;
};

export default function QuantityButton({
  cartId,
  comboId,
  productId,
  currentQuantity,
}: Props) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({ delta }: { delta: number }) =>
      updateQuantity({ cartId, comboId, productId, delta }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  return (
    <div className="flex items-center gap-2">
      Quantity:
      <button
        disabled={mutation.isPending || currentQuantity <= 1}
        onClick={() => mutation.mutate({ delta: -1 })}
        className="px-3 py-1 rounded border"
        aria-label="Decrease quantity"
      >
        –
      </button>
      <span className="min-w-[2rem] text-center">{currentQuantity}</span>
      <button
        disabled={mutation.isPending}
        onClick={() => mutation.mutate({ delta: 1 })}
        className="px-3 py-1 rounded border"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}
