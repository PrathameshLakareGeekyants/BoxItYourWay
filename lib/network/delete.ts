import axios from "axios";

export async function deleteData<T = any>(url: string, data?: any): Promise<T> {
  try {
    const response = await axios.delete(url, {
      data,
      headers: { "Content-Type": "application/json" },
    });
    if (response.status !== 200) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    return response.data;
  } catch (error: any) {
    console.error("Failed to delete data:", error);
    throw new Error(
      error.response?.data?.message || error.message || "Failed to delete data"
    );
  }
}
