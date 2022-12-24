import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButtonStyle from './LoginButton.module.scss'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <div className={LoginButtonStyle.LoginButton} onClick={() => loginWithRedirect()}>Log In</div>;
};

export default LoginButton;