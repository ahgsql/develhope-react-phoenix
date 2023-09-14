import axios from "axios";

export default async function getChatHistory(userName) {
  try {
    let response = await axios.get(
      import.meta.env.VITE_BASE_URL + "/api/chat/history/" + userName
    );
    if (response.data.success) {
      return response.data.history;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
}
