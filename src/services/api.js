import axios from "axios";

const api = axios.create({
  baseURL: "https://hackathon-dev.herokuapp.com"
});

export default api;