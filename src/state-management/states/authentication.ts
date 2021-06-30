import { AuthenticationStateType } from '../../interfaces/state-management/states';

export const initialAuthenticationState: AuthenticationStateType = {
  isAuthenticated: null,
  isLoading: false
}