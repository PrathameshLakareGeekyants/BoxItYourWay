"use client";

import { Button } from "@/components/ui/button";
import { addToCart } from "@/lib/service/cart";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useSession } from "next-auth/react";
import { toast } from "sonner";

export default function AddToCart({
  stock,
  className,
  productId,
  comboId,
}: {
  stock: number;
  className?: string;
  productId?: string;
  comboId?: string;
}) {
  const { data: session } = useSession();

  const queryClient = useQueryClient();

  const { mutate, data } = useMutation({
    mutationFn: () => {
      if (productId) return addToCart({ productId });
      if (comboId) return addToCart({ comboId });
      throw new Error("No product or combo to add to cart!");
    },
    onError: (error) => {
      toast.error(
        error.message || "Failed to add to cart. Please try again later."
      );
    },
    onSuccess: () => {
      if (productId) toast.success("Product added to cart successfully!");
      if (comboId) toast.success("Combo added to cart successfully!");

      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  if (!session) {
    return (
      <Button disabled className={className}>
        Sign in to add to cart
      </Button>
    );
  }

  return (
    <Button
      className={className}
      disabled={stock <= 0}
      onClick={() => mutate()}
    >
      {stock < 0 ? "Not in stock" : "Add to Cart"}
    </Button>
  );
}
