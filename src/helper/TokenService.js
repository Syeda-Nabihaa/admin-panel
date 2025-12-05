// helper/TokenService.js
export default class TokenService {
  static setToken({ accessToken, refreshToken, accessTokenExpiresIn = 15 }) {
    if (!accessToken || !refreshToken) {
      throw new Error("Both access and refresh tokens are required.");
    }

    const expiresAt = new Date().getTime() + accessTokenExpiresIn * 60 * 1000;

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("accessTokenExpiresAt", expiresAt);
  }

  static getAccessToken() {
    return localStorage.getItem("accessToken");
  }

  static getRefreshToken() {
    return localStorage.getItem("refreshToken");
  }

  static removeTokens() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessTokenExpiresAt");
  }

  static isAccessTokenExpired() {
    const expiresAt = localStorage.getItem("accessTokenExpiresAt");
    return !expiresAt || new Date().getTime() > Number(expiresAt);
  }
}
