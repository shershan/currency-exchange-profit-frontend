import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { validateGoogleTokenId } from '../../api/authentication';
import { SignInActions } from '../../interfaces/authentication';
import { AccessToken } from '../../interfaces/token';

const responseGoogle = (response: any, responseAction: (token: AccessToken | null) => void) => {
  if (response?.tokenId) {
    validateGoogleTokenId(response.tokenId)
      .then(response => {
        if (response?.data) {
          responseAction(response.data);
        } else {
          responseAction(null);
        }

      })
      .catch(error => {
        responseAction(null);
      })
  }
}

export const GoogleLoginComponent: React.FC<SignInActions> = (props) => {
  return (
    <GoogleLogin
      clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
      buttonText="Login"
      onRequest={() => props.onSignInRequest()}
      onSuccess={(response) => responseGoogle(response, props.onSignInResponse)}
      onFailure={(response) => responseGoogle(response, props.onSignInResponse)}
      cookiePolicy={'single_host_origin'}
    />
  );
}