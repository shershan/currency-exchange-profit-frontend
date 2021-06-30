import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { SignOutActions } from '../../interfaces/authentication';

export const GoogleSignOutComponent = (props: SignOutActions) => {
  return (
    <GoogleLogout
      clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
      buttonText={'Logout'}
      onLogoutSuccess={props.onSignOut}
    />
  );
}