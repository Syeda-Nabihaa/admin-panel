import { AllApiEndPoints } from "./ApiUrl";
import BaseService from "./BaseService";
import axiosInstance from "./interceptor/interceptor";

export class banwordsService {
  async addbanwords(body) {
    return await BaseService.post(
      AllApiEndPoints.banwords,
      body,
      "Cannnot Add banwords"
    );
  }
  async GetAllbanwords() {
    return await BaseService.get(
      AllApiEndPoints.banwords,

      "Cannnot fetch banwords"
    );
  }

  async getbanwordsbyiD(id) {
    return await BaseService.post(
      `${AllApiEndPoints.banwords}/${id}`,

      "Cannnot fetch banwords"
    );
  }
  // banwordsService.js
  async updatebanwords(id, body) {
    return await BaseService.put(
      `${AllApiEndPoints.banwords}/${id}`,
      body,
      "Cannnot Add banwords"
    );
  }
}
