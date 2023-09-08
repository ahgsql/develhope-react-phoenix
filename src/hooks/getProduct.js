import axios from "axios";

export default async (slug) => {
  try {
    let response = await axios.get(
      import.meta.env.VITE_BASE_URL + "/api/products/slug/" + slug
    );
    if (response.data.success) {
      return response.data.product;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};
