import { useQuery } from "@tanstack/react-query";
import {
  getOrderTagById,
  getPreferenceById,
  getWrapById,
} from "@/lib/service/orderOptions";

export function useOrderTagById(orderTagId: string | null) {
  return useQuery({
    queryKey: ["order-tag-by-id", orderTagId],
    queryFn: () => getOrderTagById(orderTagId!),
    enabled: !!orderTagId,
  });
}

export function usePreferenceById(preferenceId: string | null) {
  return useQuery({
    queryKey: ["preference-by-id", preferenceId],
    queryFn: () => getPreferenceById(preferenceId!),
    enabled: !!preferenceId,
  });
}

export function useWrapById(wrapId: string | null) {
  return useQuery({
    queryKey: ["wrap-by-id", wrapId],
    queryFn: () => getWrapById(wrapId!),
    enabled: !!wrapId,
  });
}
