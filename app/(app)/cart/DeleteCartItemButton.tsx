"use client";
import { Button } from "@/components/ui/button";
import { deleteCartItem } from "@/lib/service/cart";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function DeleteCartItemButton({
  cartId,
  cartItemId,
}: {
  cartId: string;
  cartItemId: string;
}) {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: () => deleteCartItem({ cartId, cartItemId }),
    onSuccess: () => {
      toast.success("Cart Item deleted!");

      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (err: any) => {
      toast.error(
        err?.message || "Failed to delete Cart Item. Please try again!"
      );
    },
  });

  return (
    <Button
      onClick={() => mutate()}
      variant={"ghost"}
      className="text-red-500 hover:bg-red-500 hover:text-white"
    >
      Delete
    </Button>
  );
}
