import axios from "axios";
import Cookies from "js-cookie";

export const axiosInstance = axios.create({
  // baseURL: "https://ebda3acadmy.com/api/v1",
   baseURL: "http://localhost:3000/api/v1",
});

const access_token = () => Cookies.get("access_token");

axiosInstance.interceptors.request.use(
  (config) => {
    const token = access_token();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
