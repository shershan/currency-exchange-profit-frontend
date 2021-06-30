import { AccessToken } from "./token";

export interface SignInActions {
  onSignInRequest: () => void;
  onSignInResponse: (token: AccessToken | null ) => void;
}

export interface SignOutActions {
  onSignOut: () => void;
}
