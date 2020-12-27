import axios from "axios";

const api = axios.create({
  baseURL: "https://apiseagri.herokuapp.com",
});

export default api;
