import { useAuth0 } from "@auth0/auth0-react";

type Props = {};

const LogoutButton = (props: Props) => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() => logout()}
      // className="btn btn-primary"
      className="auth_btn"
    >
      Выйти
    </button>
  );
};

export default LogoutButton;
