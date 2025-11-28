export default class Helper {
    setToken(accessToken,  expirationTimeInMinutes = 1440) {
      if (!accessToken) {
        throw new Error("Token is Required");
      }
      localStorage.setItem("token", accessToken);
      console.log(`Token: ${accessToken}`);
  
      setTimeout(() => {
        this.removeToken();
      }, expirationTimeInMinutes * 60 * 1000);
    }
    getToken() {
      return localStorage.getItem("accessToken");
    }
   
    removeToken() {
      localStorage.removeItem("accessToken");
    }
    
  }
  