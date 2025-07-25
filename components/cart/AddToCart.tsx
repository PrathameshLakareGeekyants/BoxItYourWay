"use client";

import { Button } from "@/components/ui/button";
import { addToCart } from "@/lib/service/cart";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useSession } from "next-auth/react";
import { use } from "react";

interface Combo {
  id: string;
  name: string;
}

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

  const { data } = useMutation({
    mutationFn: () => addToCart({ productId }),
    onSuccess: () => {
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
    <Button className={className} disabled={stock <= 0}>
      {stock < 0 ? "Not in stock" : "Add to Cart"}
    </Button>
  );
}
