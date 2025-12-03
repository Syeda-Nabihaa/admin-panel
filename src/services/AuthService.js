import axios from "axios";
import { AllApiEndPoints } from "./ApiUrl";
import axiosInstance from "./interceptor/interceptor";

export class AuthService{
     async login(body) {
    try {
      const response = await axios.post(AllApiEndPoints.login, body, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("login error:", error);

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