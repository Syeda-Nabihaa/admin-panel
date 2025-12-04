import { AllApiEndPoints } from "./ApiUrl";
import axiosInstance from "./interceptor/interceptor";

export class BadgeService {
  async addBadge(body) {
    try {
      const response = await axiosInstance.post(
        AllApiEndPoints.badge,
        body
      );
      return response.data;
    } catch (error) {
      console.error("badge cannot add add:", error);
      throw error;
    }
  }
  async GetAllbadge() {
    try {
      const response = await axiosInstance.get(AllApiEndPoints.badge);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error("badge cannot add add:", error);
      throw error;
    }
  }

  async getbadgebyiD(id) {
    try {
      const response = await axiosInstance.get(
        `${AllApiEndPoints.badge}/${id}`
      );
      console.log(response);
      return response.data;
    } catch (error) {
      console.error("badge cannot add add:", error);
      throw error;
    }
  }

  async updatebadge(body , id) {
    try {
      const response = await axiosInstance.put(
        `${AllApiEndPoints.badge}/${id}`,
        body
      );
      console.log(response);
      return response.data;
    } catch (error) {
      console.error("badge cannot add add:", error);
      throw error;
    }
  }
}
