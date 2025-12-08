import { AllApiEndPoints } from "./ApiUrl";
import BaseService from "./BaseService";
import axiosInstance from "./interceptor/interceptor";

export class UserService {
  async addUser(body) {
    return await BaseService.post(
      AllApiEndPoints.addUsers,
      body,
      "Error while adding User"
    );
  }
  async getAlluser() {
    return await BaseService.get(
      AllApiEndPoints.getUsers,
      "Error while fetching User"
    );
  }
}
