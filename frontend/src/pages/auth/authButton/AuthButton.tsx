import "./AuthButton.scss";

import LoginButton from "./loginButton/LoginButton";
import LogoutButton from "./logoutButton/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

export const AuthButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};
