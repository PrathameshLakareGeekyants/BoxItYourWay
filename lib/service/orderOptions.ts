import { ORDER_OPTIONS_API } from "@/constants";
import { fetchData } from "../network/fetcher";

export async function getOrderTagsData() {
  return fetchData(`${ORDER_OPTIONS_API}/order-tag`);
}

export async function getWrapData() {
  return fetchData(`${ORDER_OPTIONS_API}/wrap`);
}

export async function getPreferenceData() {
  return fetchData(`${ORDER_OPTIONS_API}/preference`);
}

export async function getOrderTagById(orderTagId: string) {
  return fetchData(`${ORDER_OPTIONS_API}/order-tag/${orderTagId}`);
}

export async function getWrapById(wrapId: string) {
  return fetchData(`${ORDER_OPTIONS_API}/wrap/${wrapId}`);
}

export async function getPreferenceById(preferenceId: string) {
  return fetchData(`${ORDER_OPTIONS_API}/preference/${preferenceId}`);
}
