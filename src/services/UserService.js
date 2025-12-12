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


//---------------student register (testing)------------------------
  // async addStudents(body) {
  //   return await BaseService.post(
  //     AllApiEndPoints.register,
  //     body,
  //     "Error while adding students"
  //   );
  // }
  //   async getAllStudents() {
  //   return await BaseService.get(
  //     AllApiEndPoints.register,
  //     "Error while fetching students"
  //   );
  // }
  
  //   async getAllstudentById(id) {
  //     return await BaseService.post(
  //       `${AllApiEndPoints.register}/${id}`,
  
  //       "Cannnot fetch students"
  //     );
  //   }
  //    async updateStudents(id, body) {
  //       return await BaseService.put(
  //         `${AllApiEndPoints.register}/${id}`,
  //         body,
  //         "Cannnot update students"
  //       );
  //     }
}
