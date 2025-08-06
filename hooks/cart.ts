// hooks/useCart.ts
import { useQuery } from "@tanstack/react-query";
import { getCartItems } from "@/lib/service/cart";

export function useCart() {
  return useQuery({
    queryKey: ["cart"],
    queryFn: getCartItems,
  });
}
