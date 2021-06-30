import React from "react";
import { UserInfoProps } from "../../../interfaces/props/component-props";

export const UserInfoComponent = (props: UserInfoProps) => {
  return (
    <div>
      {props.userInfo?.email}
    </div>
  );
}