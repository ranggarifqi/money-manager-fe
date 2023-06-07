import axios from "axios";

export interface SuccessResponse<T> {
  statusCode: number;
  message?: string;
  data: T;
}

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 60000,
});

export const getAxiosInstance = () => {
  return instance;
};

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    config.headers.Authorization = `bearer ${accessToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// TODO: Add interceptor on response to perform refresh token action
