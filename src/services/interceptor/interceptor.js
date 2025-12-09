// api/axiosInstance.js
import axios from "axios";
import { environment } from "../../environment/environment";
import TokenService from "../../helper/TokenService";

const axiosInstance = axios.create({
  baseURL: environment.baseUrl,
});

// Attach access token to requests
axiosInstance.interceptors.request.use(
  (config) => {
    const token = TokenService.getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers.Accept = "application/json";
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle 401 -> refresh token
axiosInstance.interceptors.response.use(
  (response) => response,
  // console.log(response)
  async (error) => {
    const originalRequest = error.config;
    console.log(error);
    if (
      error.response?.statusCode === 401 &&
      !originalRequest._retry &&
      TokenService.getRefreshToken()
    ) {
      originalRequest._retry = true;

      // try {
      //   // const refreshToken = TokenService.getRefreshToken();
      //   // console.log(refreshToken)
      //   // const res = await axios.post(`${environment.baseUrl}/refresh`, {
      //   //   refreshToken,
      //   // });

      //   const { accessToken, accessTokenExpiresIn } = res.data;
      //   TokenService.setToken({ accessToken, refreshToken, accessTokenExpiresIn });

      //   originalRequest.headers.Authorization = `Bearer ${accessToken}`;
      //   return axiosInstance(originalRequest);
      // } catch (err) {
      //   TokenService.removeTokens();
      //   window.location.href = "/"; // redirect to login
      //   return Promise.reject(err);
      // }
      console.log(TokenService.getRefreshToken());
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
