import { fetchDeliveryInfoById } from "@/lib/service/delivery";
import { useQuery } from "@tanstack/react-query";

export function useDeliveryAddressById(addressId: string | null) {
  return useQuery({
    queryKey: ["deliveryInfo", addressId],
    queryFn: () => fetchDeliveryInfoById(addressId!),
    enabled: !!addressId,
  });
}
