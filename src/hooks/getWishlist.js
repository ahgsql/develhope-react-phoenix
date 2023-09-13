import axios from "axios";

export default async function getWishlist() {
    try {
        let response = await axios.get(
            import.meta.env.VITE_BASE_URL + "/api/wishlist",
            { withCredentials: true }
        );
        if (response.data.success) {
            return response.data.wishlist;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
}
