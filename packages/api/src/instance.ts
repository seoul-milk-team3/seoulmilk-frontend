import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { handleAPIError, handleCheckAndSetToken } from "./interceptor";
// Axios 인스턴스 생성
export const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api`,
});

axiosInstance.interceptors.request.use((config) => {
  console.log("🚀 [Axios 요청] URL:", config.url);
  console.log("📌 [Axios 요청] Method:", config.method?.toUpperCase());
  console.log("🛠 [Axios 요청] Headers:", config.headers);
  console.log("📤 [Axios 요청] Data:", config.data);
  return config;
});

export function get<T>(...args: Parameters<typeof axiosInstance.get>) {
  return axiosInstance.get<T>(...args).then((res) => res.data);
}

export function post<T>(...args: Parameters<typeof axiosInstance.post>) {
  return axiosInstance.post<T>(...args).then((res) => res.data);
}

export function put<T>(...args: Parameters<typeof axiosInstance.put>) {
  return axiosInstance.put<T>(...args).then((res) => res.data);
}

export function patch<T>(...args: Parameters<typeof axiosInstance.patch>) {
  return axiosInstance.patch<T>(...args).then((res) => res.data);
}

export function del<T>(...args: Parameters<typeof axiosInstance.delete>) {
  return axiosInstance.delete<T>(...args).then((res) => res.data);
}

// 인터셉터 설정
axiosInstance.interceptors.request.use(handleCheckAndSetToken);
axiosInstance.interceptors.response.use((res) => res, handleAPIError);
