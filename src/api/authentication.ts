import { apiClient } from '../infrastructure/apiClient';
import { AccessToken } from '../interfaces/token';

export const isAuthenticated = () => {
  return apiClient().get<boolean>('authentication/isAuthenticated');
}

export const validateGoogleTokenId = (tokenId: string) => {
  return apiClient().post<AccessToken | null>('authentication/google', {
    tokenId
  });
}