// src/lib/axios.js
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chatty-1f2p.onrender.com/api",
  withCredentials: true,
});
