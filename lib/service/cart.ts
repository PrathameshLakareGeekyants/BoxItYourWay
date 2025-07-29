import { CART_API } from "@/constants";
import { fetchData } from "../network/fetcher";
import { postData } from "../network/post";
import { deleteData } from "../network/delete";

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
  if (productId) {
    return postData(CART_API, { productId });
  } else if (comboId) {
    return postData(CART_API, { comboId });
  }
}

//cart item api's
export async function updateQuantity({
  cartId,
  comboId,
  productId,
  delta,
}: {
  cartId: string;
  comboId?: string;
  productId?: string;
  delta: number;
}) {
  if (productId) {
    return postData(`${CART_API}/update-quantity`, {
      cartId,
      productId,
      delta,
    });
  } else if (comboId) {
    return postData(`${CART_API}/update-quantity`, { cartId, comboId, delta });
  }
}

export async function deleteCartItem({
  cartId,
  cartItemId,
}: {
  cartId: string;
  cartItemId: string;
}) {
  return deleteData(`${CART_API}/cart-item`, {
    cartId,
    cartItemId,
  });
}
