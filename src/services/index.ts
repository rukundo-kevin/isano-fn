import axios, { AxiosRequestConfig } from "axios";
const url = import.meta.env.VITE_BACKEND_URL;

export const axiosServices = axios.create({
  baseURL: import.meta.env.VITE_APP_BACKED_URL || "http://localhost:3001/api",
});

axiosServices.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem("auth_token");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const fetcher = async (args: string | [string, AxiosRequestConfig]) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axiosServices.get(url, { ...config });

  return res.data;
};

const api = axios.create({
  baseURL: "http://localhost:3001/api",
});

export const localUrl = url;
interface ErrorResponse {
  message: string;
}

export const handleErrorResponse = (error: any): ErrorResponse => {
  if (error.response !== undefined) {
    return { message: error.response.data.message };
  }
  return { message: error.message };
};

export default api;
