import { Link } from "react-router-dom";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

type Props = {};

const LoginButton = (props: Props) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Link to="/authorization">
      <button onClick={() => loginWithRedirect()} className="auth_btn">
        Войти
      </button>
    </Link>
  );
};

export default LoginButton;
