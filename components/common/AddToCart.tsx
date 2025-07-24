"use client";

import { Button } from "@/components/ui/button";

import { useSession } from "next-auth/react";

interface Combo {
  id: string;
  name: string;
}

export default function AddToCart({
  stock,
  className,
}: {
  stock: number;
  className?: string;
}) {
  const { data: session } = useSession();

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
