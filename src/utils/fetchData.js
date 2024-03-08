import axios from "axios";
export async function fetchData() {
  try {
    const response = await axios.get("http://localhost:3001/data");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
