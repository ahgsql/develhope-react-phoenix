import axios from "axios";

export default async (data) => {
  try {
    let response = await axios.post(
      import.meta.env.VITE_BASE_URL + "/api/order/new",
      data
    );
    if (response.data.success) {
      return response.data.order;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};
