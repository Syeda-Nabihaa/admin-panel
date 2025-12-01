import { AllApiEndPoints } from "./ApiUrl";
import axiosInstance from "./interceptor/interceptor";

export class UnversityService {
  async addUniversity(body) {
    try {
      const response = await axiosInstance.post(
        AllApiEndPoints.university,
        body
      );
      return response.data;
    } catch (error) {
      console.error("University cannot add add:", error);
      throw error;
    }
  }
  async GetAllUniversity() {
    try {
      const response = await axiosInstance.get(AllApiEndPoints.university);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error("University cannot add add:", error);
      throw error;
    }
  }

  async getUniversitybyiD(id) {
    try {
      const response = await axiosInstance.get(
        `${AllApiEndPoints.university}/${id}`
      );
      console.log(response);
      return response.data;
    } catch (error) {
      console.error("University cannot add add:", error);
      throw error;
    }
  }

  async updateUniversity(body , id) {
    try {
      const response = await axiosInstance.put(
        `${AllApiEndPoints.university}/${id}`,
        body
      );
      console.log(response);
      return response.data;
    } catch (error) {
      console.error("University cannot add add:", error);
      throw error;
    }
  }
}
