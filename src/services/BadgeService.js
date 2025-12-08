import { AllApiEndPoints } from "./ApiUrl";
import BaseService from "./BaseService";
import axiosInstance from "./interceptor/interceptor";

export class BadgeService {
  async addBadge(body) {
    return await BaseService.post(
      AllApiEndPoints.badge,
      body,
      "Cannnot Add Badge"
    );
  }
  async GetAllbadge() {
    return await BaseService.get(
      AllApiEndPoints.badge,

      "Cannnot fetch Badge"
    );
  }

  async getbadgebyiD(id) {
    return await BaseService.post(
      `${AllApiEndPoints.badge}/${id}`,

      "Cannnot fetch Badge"
    );
  }
  // BadgeService.js
  async updatebadge(id, body) {
    return await BaseService.put(
      `${AllApiEndPoints.badge}/${id}`,
      body,
      "Cannnot Add Badge"
    );
  }
}
