import axios from "axios";
import Cookies from "js-cookie";

export const axiosInstance = axios.create({
  // baseURL: "https://ebda3acadmy.com/api/v1",
   baseURL: "http://localhost:3000/api/v1",
});

const tokens = () => Cookies.get("token");

axiosInstance.interceptors.request.use(
  (config) => {
    const token = tokens();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
