import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { UserInfo } from "../../interfaces/user-info";
import { UserInfoComponent } from "./user-info-component/user-info-component";
import { GoogleSignOutComponent } from '../authentication/google-logout';
import { getUserInfo } from '../../api/account';
import { Menu } from './menu/menu';
import { HeaderProps } from "../../interfaces/props/component-props";

export const Header = (props: HeaderProps) => {
  const [userInfo, setUserInfo] = useState<UserInfo>();

  useEffect(() => {
    getUserInfo()
      .then(result => {
        setUserInfo(result.data);
      });
  }, []);

  return (
    <div>
      <Menu />
      <UserInfoComponent userInfo={userInfo} />
      <GoogleSignOutComponent
        onSignOut={props.onSignOut} />
    </div>
  );
}