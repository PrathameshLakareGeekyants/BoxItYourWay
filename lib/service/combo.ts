import { COMBO_API } from "@/constants";
import { fetchData } from "./fetcher";

export async function getCombo() {
  return fetchData(COMBO_API);
}
