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

const getAllProducts = async () => {
  try {
    let response = await axios.get(
      import.meta.env.VITE_BASE_URL + "/api/products"
    );
    if (response.data.success) {
      return response.data.products;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};
export { getAllProducts };
