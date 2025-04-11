export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development"
    ? "http://localhost:5000" // your local dev backend
    : "https://chatty-lf2p.onrender.com", // your live backend
  withCredentials: true,
});
