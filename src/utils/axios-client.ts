// utils/axiosClient.ts
import axios from "axios";

//Urri của app dụng cụ cầu lông
const dungCuUri = "http://localhost:3000/api/"; // này máy Liêm

const axiosClient = axios.create({
  baseURL: dungCuUri, // hoặc process.env.NEXT_PUBLIC_API_URL nếu dùng biến môi trường
});

// Optional: Gắn token tự động nếu có
// axiosClient.interceptors.request.use(
//   (config) => {
//     const token = JSON.parse(localStorage.getItem("token") ?? ""); // hoặc từ cookie
//     if (token) {
//       config.headers.Authorization = `${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

export default axiosClient;
