import "./LogInOutButtons.scss";

import { Link, useNavigate } from "react-router-dom";

import { logOut } from "../../../../parse";

type Props = {};

const LogoutButton = (props: Props) => {
  let navigate = useNavigate();
  const onLogout = async () => {
    await logOut();
    navigate("/");
  };
  return (
    <Link to="/authorization">
      <button onClick={onLogout} className="auth_btn">
        Выйти
      </button>
    </Link>
  );
};

export default LogoutButton;
