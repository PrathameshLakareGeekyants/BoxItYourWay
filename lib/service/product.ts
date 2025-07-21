import { PRODUCTS_API } from "@/app/constants";
import { fetchData } from "./fetcher";

export async function getProducts(category?: string) {
  const url = category ? `${PRODUCTS_API}?category=${category}` : PRODUCTS_API;
  return fetchData(url);
}
