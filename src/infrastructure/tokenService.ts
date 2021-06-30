import { AuthConstants } from "../constants/auth"

export class TokenService {
  public static getAccessToken = () => {
    return localStorage.getItem(AuthConstants.ACCESS_TOKEN);
  }

  public static setAccessToken = (token: string) => {
    localStorage.setItem(AuthConstants.ACCESS_TOKEN, token);
  }

  public static clearAccessToken = () => {
    localStorage.removeItem(AuthConstants.ACCESS_TOKEN);
  }
}