import axios from "axios";
import { AllApiEndPoints } from "./ApiUrl";
import axiosInstance from "./interceptor/interceptor";
import TokenService from "../helper/TokenService";

export class AuthService{
 async login(body) {
    try {
      const response = await axios.post(AllApiEndPoints.login, body, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data.success) {
        // Extract tokens from response.data.data
        const { accessToken, refreshToken } = response.data.data;

        // Store tokens for later use
        TokenService.setToken({
          accessToken,
          refreshToken,
          accessTokenExpiresIn: 15, // in minutes
        });
      }

      return response.data;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  }

  async getProfile(){
    try {
      const response = await axiosInstance.get(AllApiEndPoints.getProfile)
      console.log(response.data)
      return response.data
    } catch (error) {
      
    }
  }

}

export default AuthService;