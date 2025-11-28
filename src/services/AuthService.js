import axios from "axios";
import { AllApiEndPoints } from "./ApiUrl";

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

}

export default AuthService;