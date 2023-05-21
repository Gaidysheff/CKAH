import "./Users.scss";

import { Button, Container, Typography } from "@mui/material";
import { endSession, getSession, isLoggedIn } from "../../../storage/session";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

type Props = {};

const Users = (props: Props) => {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/login");
    }

    let session: any = getSession();
    setEmail(session.email);

    console.log("Your access token is: " + session.accessToken);
  }, [navigate]);

  const onLogout = () => {
    endSession();
    navigate("/login");
  };

  return (
    <Container maxWidth="xs">
      <br />
      <div className="user">
        <Typography variant="h6" component="h1" textAlign="center" gutterBottom>
          You're logged in as:
        </Typography>
        <Typography variant="h5" component="h1" textAlign="center" gutterBottom>
          {email}
        </Typography>
        <Typography variant="h6" component="h6" textAlign="center" gutterBottom>
          Check the console for your (access/session) token.
        </Typography>
        <Button
          variant="contained"
          color="error"
          onClick={onLogout}
          sx={{ mt: 3 }}
          fullWidth
        >
          Log out
        </Button>
      </div>
    </Container>
  );
};

export default Users;
