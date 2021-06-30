import { SignInActions, SignOutActions } from "../authentication";
import { UserInfo } from "../user-info";

export interface AccountProps extends SignOutActions {

}

export interface DashboardProps extends SignOutActions {

}

export interface UserInfoProps {
  userInfo: UserInfo | undefined
}

export interface HeaderProps extends SignOutActions {
  
}

export interface MainProps extends SignInActions {

}

export interface PageProps extends SignOutActions {

}