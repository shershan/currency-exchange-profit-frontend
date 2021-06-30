import React, { useEffect, useReducer } from "react";
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom'; import { TokenService } from "../../infrastructure/tokenService";
import { Dashboard } from "../dashboard/dashboard";
import { Loading } from "../../ui/loading/loading";
import { Main } from "../main/main";
import { authenticationReducer } from '../../state-management/reducers/authentication';
import { initialAuthenticationState } from '../../state-management/states/authentication';
import { isAuthenticatedRequest, isAuthenticatedResponse } from '../../state-management/actions/authentication-actions';
import { Action } from "../../interfaces/state-management/actions";
import { isAuthenticated } from "../../api/authentication";
import { AccessToken } from "../../interfaces/token";
import { Routes } from '../../constants/routes';
import { Account } from "../account/account";

const handleAuthenticationResponse = (dispatch: React.Dispatch<Action<boolean>>, token: AccessToken | null) => {
  if (token?.accessToken != null) {
    TokenService.setAccessToken(token.accessToken);
  } else {
    TokenService.clearAccessToken();
  }

  var isAuth = token != null;
  isAuthenticatedResponse(dispatch, isAuth);
}

export const Application = () => {
  const [authState, dispatch] = useReducer(authenticationReducer, initialAuthenticationState);

  useEffect(() => {
    isAuthenticatedRequest(dispatch);

    var accessToken = TokenService.getAccessToken();
    if (accessToken != null) {

      const token: AccessToken = {
        accessToken
      }

      isAuthenticated()
        .then(response => {
          if (response != null) {
            TokenService.setAccessToken(accessToken as string);
            handleAuthenticationResponse(dispatch, token);
          }
        })
        .catch(error => {
          TokenService.clearAccessToken();
          handleAuthenticationResponse(dispatch, null);
        });
    }
    else {
      handleAuthenticationResponse(dispatch, null);
    }
  }, []);

  if (authState.isAuthenticated == null) {
    return (
      <Loading isLoading={true} />
    );
  }
  else {
    return (
      <React.Fragment>
        <Loading isLoading={authState.isLoading} />
        <Router>
          <Switch>
            {
              authState.isAuthenticated
                ? <React.Fragment>
                  <Route path={`${Routes.DASHBOARD}`} component={() => <Dashboard onSignOut={() => handleAuthenticationResponse(dispatch, null)} />} />
                  <Route path={Routes.ACCOUNT} component={() => <Account onSignOut={() => handleAuthenticationResponse(dispatch, null)} />} />
                  <Redirect from={`${Routes.ANY}`} to={`${Routes.DASHBOARD}`} />
                </React.Fragment>
                : <React.Fragment>
                  <Route path={`${Routes.INDEX}`} exact component={() =>
                    <Main
                      onSignInRequest={() => isAuthenticatedRequest(dispatch)}
                      onSignInResponse={(value) => handleAuthenticationResponse(dispatch, value)}
                    />} />
                  <Redirect from={`${Routes.ANY}`} to={`${Routes.INDEX}`} />
                </React.Fragment>
            }

          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}