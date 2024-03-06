import axios from "axios";
async function fetchData() {
  try {
    const response = await axios.get("http://localhost:3001/data");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export default fetchData;
