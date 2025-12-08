import { AllApiEndPoints } from "./ApiUrl";
import BaseService from "./BaseService";
import axiosInstance from "./interceptor/interceptor";

export class UnversityService {
  async addUniversity(body) {
    return await BaseService.post(
      AllApiEndPoints.university,
      body,
      "Cannnot Add university"
    );
  }
  async GetAllUniversity() {
    return await BaseService.get(
      AllApiEndPoints.university,
      "Error fetching All University"
    );
  }

  async getUniversitybyiD(id) {
    return await BaseService.get(
      `${AllApiEndPoints.university}/${id}`,
      "Error"
    );
  }

  async updateUniversity(id, body) {
    return await BaseService.put(
      `${AllApiEndPoints.university}/${id}`,
      body,
      "Error while updating data"
    );
  }
}
