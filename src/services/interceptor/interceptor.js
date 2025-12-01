import axios from "axios";
import { environment } from "../../environment/environment";
import Helper from "../../helper/Helper";

const helpers = new Helper();

const axiosInstance = axios.create({
  baseURL: environment.baseUrl,
});
axiosInstance.interceptors.request.use(
  (config) => {
    const { accessToken } = helpers.getToken() || {};

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
      config.headers.Accept = "application/json";
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
