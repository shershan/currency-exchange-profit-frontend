import { AuthenticationActionTypes } from "../actionTypes/authentication";
import { Action, ActionEmpty } from "../../interfaces/state-management/actions";
import { AuthenticationStateType } from "../../interfaces/state-management/states";

export const authenticationReducer = (state: AuthenticationStateType, action: Action<boolean> | ActionEmpty) => {
  switch (action.type) {
    case AuthenticationActionTypes.IS_AUTHENTICATED_REQUEST:
      state = { ...state, isLoading: true };
      break;
    case AuthenticationActionTypes.IS_AUTHENTICATED_RESPONSE:
      state = {
        ...state,
        isAuthenticated: (action as Action<boolean>).payload,
        isLoading: false
      };
      break;
    default:
      return state;
  }

  return state;
}
