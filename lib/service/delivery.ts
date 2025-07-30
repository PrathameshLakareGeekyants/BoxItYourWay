import { DELIVERY_API } from "@/constants";
import { fetchData } from "../network/fetcher";
import { postData } from "../network/post";

export async function fetchDeliveryInfos() {
  return fetchData(DELIVERY_API);
}

export async function createDeliveryInfo(data: {
  addressLine: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  contact: string;
}) {
  const res = postData(DELIVERY_API, data);

  return res;
}

export async function fetchDeliveryInfoById(deliveryId: string) {
  return fetchData(`${DELIVERY_API}/${deliveryId}`);
}
