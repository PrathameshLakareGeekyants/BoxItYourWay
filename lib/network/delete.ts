import axios from "axios";

export async function deleteData<T = any>(url: string): Promise<T> {
  try {
    const response = await axios.delete(url);
    if (response.status !== 200) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    return response.data;
  } catch (error: any) {
    console.error("Failed to delete data:", error);
    throw new Error(
      error.response.data?.message || error.message || "Failed to delete data"
    );
  }
}
