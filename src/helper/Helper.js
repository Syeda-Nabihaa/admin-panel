export default class Helper {
  setToken(accessToken, refreshToken, expirationTimeInMinutes = 1440) {
    if (!accessToken || !refreshToken) {
      throw new Error("Both access and refresh tokens are required.");
    }

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    console.log(`Access Token: ${accessToken}`);
    console.log(`Refresh Token: ${refreshToken}`);

    setTimeout(() => {
      this.removeToken();
    }, expirationTimeInMinutes * 60 * 1000);
  }

  getToken() {
    return {
      accessToken: localStorage.getItem("accessToken"),
      refreshToken: localStorage.getItem("refreshToken"),
    };
  }

  removeToken() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }
}
