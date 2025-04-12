import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://chatty-1f2p.onrender.com",
  withCredentials: true,
});

export default axiosInstance;
