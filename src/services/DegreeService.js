import { AllApiEndPoints } from "./ApiUrl";
import BaseService from "./BaseService";
import axiosInstance from "./interceptor/interceptor";

export class DegreeService {
  async adddegree(body) {
    return await BaseService.post(
      AllApiEndPoints.degree,
      body,
      "Cannnot Add degree"
    );
  }
  async GetAlldegree() {
    return await BaseService.get(
      AllApiEndPoints.degree,

      "Cannnot fetch degree"
    );
  }

  async getdegreebyiD(id) {
    return await BaseService.post(
      `${AllApiEndPoints.degree}/${id}`,

      "Cannnot fetch degree"
    );
  }
  
  async updatedegree(id, body) {
    return await BaseService.put(
      `${AllApiEndPoints.degree}/${id}`,
      body,
      "Cannnot Add degree"
    );
  }
}
