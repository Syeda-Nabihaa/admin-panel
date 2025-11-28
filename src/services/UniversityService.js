import { AllApiEndPoints } from "./ApiUrl";
import axiosInstance from "./interceptor/interceptor";

export class UnversityService {
  async addUniversity(body) {
    try {
      const response = await axiosInstance.post(
        AllApiEndPoints.university,
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("University cannot add add:", error);
      throw error;
    }
  }
  async GetAllUniversity() {
    try {
      const response = await axiosInstance.get(
        AllApiEndPoints.university
      );
      console.log(response);
      return response.data;
    } catch (error) {
      console.error("University cannot add add:", error);
      throw error;
    }
  }
}
