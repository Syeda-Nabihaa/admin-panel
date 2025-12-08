import axiosInstance from "./interceptor/interceptor";

class baseService {
  async get(url, errMsg) {
    try {
      const response = await axiosInstance.get(url);
      return response.data;
    } catch (error) {
      console.log(errMsg);
      throw error;
    }
  }

  async post(url, body, errMsg) {
    try {
      const response = await axiosInstance.post(url, body, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch {
      console.log(errMsg);
    }
  }
  async put(url, body, errMsg) {
    try {
      const response = await axiosInstance.put(url, body, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch {
      console.log(errMsg);
    }
  }

  async delete(url, errMsg) {
    try {
      const response = await axiosInstance.delete(url);
      return response.data;
    } catch {
      console.log(errMsg);
    }
  }
}
export default new baseService();
