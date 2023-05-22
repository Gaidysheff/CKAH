import "./LogInOutButtons.scss";

import { Link } from "react-router-dom";

type Props = {};

const LoginButton = (props: Props) => {
  return (
    <Link to="/authorization">
      <button className="auth_btn">Войти</button>
    </Link>
  );
};

export default LoginButton;
