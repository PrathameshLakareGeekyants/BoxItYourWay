import { COMBO_API } from "@/constants";
import { fetchData } from "./fetcher";
import { postData } from "./post";

export async function getCombo() {
  return fetchData(COMBO_API);
}

export async function getComboById(comboId: string) {
  return fetchData(`${COMBO_API}/${comboId}`);
}

export async function createCombo(comboData: {
  name: string;

  products?: string[];
}) {
  return postData(`${COMBO_API}`, comboData);
}

export async function addToCombo(comboId: string, productIds: string[]) {
  const combo = await getComboById(comboId);
  if (!combo) {
    throw new Error(`Combo with ID ${comboId} not found`);
  }

  const existingProductIds = combo.combo.comboItem.map(
    (item: any) => item.product.id
  );

  const uniqueNewIds = productIds.filter(
    (id) => !existingProductIds.includes(id)
  );
  const updatedProductIds = [...existingProductIds, ...uniqueNewIds];

  return postData(`${COMBO_API}/${comboId}`, { productIds: updatedProductIds });
}
