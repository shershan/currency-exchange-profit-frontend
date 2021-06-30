
import { apiClient } from "../infrastructure/apiClient";
import { UserInfo } from "../interfaces/user-info";

export const getUserInfo = () => {
  return apiClient().get<UserInfo>('account/accountInfo');
}