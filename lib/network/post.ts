import axios from "axios";

export async function postData<T = any>(url: string, data: any): Promise<T> {
  try {
    const response = await axios.post(url, data);
    if (response.status !== 200 && response.status !== 201) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    return response.data;
  } catch (error: any) {
    console.error("Failed to post data:", error);
    throw new Error(
      error.response.data?.message || error.message || "Failed to post data"
    );
  }
}
