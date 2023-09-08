import axios from "axios";

export default async function(productId) {
    try {
        let result = await axios.get(
            import.meta.env.VITE_BASE_URL + "/api/comments/"+productId,
        );
        if (result.data.success) {
            return result.data.comments;
        }
    } catch (error) {
        console.log(error.response.status);
        return false;
    }
}