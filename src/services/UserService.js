import { AllApiEndPoints } from "./ApiUrl";
import axiosInstance from "./interceptor/interceptor";

export class UserService {
  async addUser(body) {
    try {
      const response = await axiosInstance.post(
        AllApiEndPoints.addUsers,
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("user cannot add add:", error);
      throw error;
    }
  }
  async getAlluser() {
    try {
      const response = await axiosInstance.get(AllApiEndPoints.getUsers);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("user cannot add add:", error);
      throw error;
    }
  }
}
