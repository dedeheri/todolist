import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3012/api/",
  headers: { "content-type": "application/json" },
  withCredentials: true,
});
