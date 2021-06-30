import React from 'react';
import { MainProps } from '../../interfaces/props/component-props';
import { GoogleLoginComponent } from '../authentication/google-login';

export const Main = (props: MainProps) => {
  return (
    <div>
      <div>
        <GoogleLoginComponent
          {...props}
        />
      </div>
      <div>
        WELCOME
      </div>
    </div>
  );
}