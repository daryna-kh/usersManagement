import axios from "axios";
import { tokenService } from "../service/tokenService";

const axiosInstance = axios.create({
  baseURL: "/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = tokenService.get();

  const isAuthEndpoint =
    config.url?.includes("/auth/login") ||
    config.url?.includes("/auth/register");
  if (token && !isAuthEndpoint) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export const { delete: del, get, post, put } = axiosInstance;
