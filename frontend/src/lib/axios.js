import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chatty-lf2p.onrender.com" : "/api",
  withCredentials: true,
});
