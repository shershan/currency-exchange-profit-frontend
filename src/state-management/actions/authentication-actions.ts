import { Action, ActionEmpty } from "../../interfaces/state-management/actions";
import { AuthenticationActionTypes } from "../actionTypes/authentication";

export const isAuthenticatedRequest = (dispatch: React.Dispatch<ActionEmpty>) => {
  dispatch({
    type: AuthenticationActionTypes.IS_AUTHENTICATED_REQUEST
  });
}

export const isAuthenticatedResponse = (dispatch: React.Dispatch<Action<boolean>>, value: boolean) => {
  dispatch({
    type: AuthenticationActionTypes.IS_AUTHENTICATED_RESPONSE,
    payload: value
  });
}

