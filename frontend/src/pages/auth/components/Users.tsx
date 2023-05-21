import "./Users.scss";

import { Button, Container, Typography } from "@mui/material";
import { endSession, getSession } from "../../../storage/session";
import { getUser, isLoggedIn, logOut } from "../../../parse";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

type Props = {};

const Users = (props: Props) => {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    (async () => {
      let loggedIn = await isLoggedIn();
      if (!loggedIn) {
        navigate("/login");
      }

      let user = await getUser();
      setEmail(user.getEmail());
      setUsername(user.getUsername());

      console.log("Your session token is: " + user.getSessionToken());
    })();
  }, [navigate]);

  const onLogout = async () => {
    await logOut();
    navigate("/");
  };

  return (
    <Container maxWidth="xs">
      <br />
      <div className="user">
        <Typography variant="h6" component="h1" textAlign="center" gutterBottom>
          You're logged in as:
        </Typography>
        <Typography variant="h5" component="h6" textAlign="center" gutterBottom>
          {username}
        </Typography>
        <Typography variant="h5" component="h6" textAlign="center" gutterBottom>
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
