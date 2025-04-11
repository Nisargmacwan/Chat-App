import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chatty-lf2p.onrender.com", // Always use full backend URL
  withCredentials: true,
});
