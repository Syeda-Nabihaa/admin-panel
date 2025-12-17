import { AllApiEndPoints } from "./ApiUrl";
import BaseService from "./BaseService";

export class ReportService {
  async addreport(body) {
    return await BaseService.post(
      AllApiEndPoints.report,
      body,
      "Cannnot Add report"
    );
  }
  async GetAllreport() {
    return await BaseService.get(
      AllApiEndPoints.report,

      "Cannnot fetch report"
    );
  }

  async getreportbyiD(id) {
    return await BaseService.post(
      `${AllApiEndPoints.report}/${id}`,

      "Cannnot fetch report"
    );
  }
  
  async updatereport(id, body) {
    return await BaseService.put(
      `${AllApiEndPoints.report}/${id}`,
      body,
      "Cannnot Add report"
    );
  }
}
