import { CART_API } from "@/constants";
import { fetchData } from "../network/fetcher";
import { postData } from "../network/post";

export async function getCartItems() {
  return fetchData(CART_API);
}

export async function addToCart({
  productId,
  comboId,
}: {
  productId?: string | undefined;
  comboId?: string | undefined;
}) {
  console.log("comboID", comboId);
  console.log("productID", productId);

  const data = "";
  return postData(CART_API, data);
}
