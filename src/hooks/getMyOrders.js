import axios from "axios";

export default async function getMyOrders() {
  try {
    let response = await axios.get(
      import.meta.env.VITE_BASE_URL + "/api/order/my",
      { withCredentials: true }
    );
    if (response.data.success) {
      return response.data.orders;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
}
