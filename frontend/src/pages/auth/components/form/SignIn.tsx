import "./SignInUp.scss";

import {
  Alert,
  Box,
  Button,
  Grid,
  Link,
  Paper,
  TextField,
} from "@mui/material";

import AuthSvgSelector from "../../AuthSvgSelector";
import { signInUser } from "../../../../firebase";
import { startSession } from "../../../../storage/session";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type Props = {};

const SignIn = (props: Props) => {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();

    if (!username || !password) {
      setError("Please enter your username and password.");
      return;
    }

    setError("");

    try {
      let loginResponse = await signInUser(username, password);
      startSession(loginResponse.user);
      navigate("/user");
    } catch (error: any) {
      console.error(error.message);
      setError(error.message);
    }
  };

  const paperStyle = {
    width: "100%",
    height: "100%",
    margin: "10px 0 0 0",
    padding: 0,
  };
  const btnStyle = {
    width: "100%",
    height: "59px",
    fontSize: "22px",
    lineHeight: "27px",
    background: "#5970ff",
    "& .MuiButtonBase-root-MuiButton-root": { fontFamily: "Inter" },
  };

  return (
    <Grid>
      {error && (
        <Alert severity="error" sx={{ my: 2 }}>
          {error}
        </Alert>
      )}
      <Paper
        elevation={0}
        style={paperStyle}
        component="form"
        onSubmit={onSubmit}
      >
        <div className="signIn__input-group">
          <div className="signIn__input-block">
            <div className="signIn__label">Логин или номер телефона:</div>
            <TextField
              sx={{
                width: "100%",
                "& .MuiOutlinedInput-input": { height: "14px" },
              }}
              id="outlined-basic"
              label=""
              variant="outlined"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="signIn__input-block">
            <div className="signIn__label">Пароль:</div>
            <TextField
              sx={{
                width: "100%",
                "& .MuiOutlinedInput-input": { height: "14px" },
              }}
              id="outlined-basic"
              label=""
              variant="outlined"
              type="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <Button
          variant="contained"
          type="submit"
          style={btnStyle}
          //  href="/somewhere"
        >
          Войти
        </Button>

        <Box
          sx={{
            width: "100%",
            height: "62px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link
            sx={{
              margin: "15px 0 30px 0",
              fontSize: "14px",
              lineHeight: "17px",
            }}
            align="center"
            href="/somewhere"
          >
            Восстановить пароль
          </Link>
        </Box>
        <div className="signIn__label">Войти через:</div>
        <div className="signIn__icons">
          <div className="signIn__icon">
            <Link href="/somewhere">
              <AuthSvgSelector id={"icon-google"} />
            </Link>
          </div>
          <div className="signIn__icon">
            <Link className="signIn__icon" href="/somewhere">
              <AuthSvgSelector id={"icon-facebook"} />
            </Link>
          </div>
          <div className="signIn__icon">
            <Link className="signIn__icon" href="/somewhere">
              <AuthSvgSelector id={"icon-yandex"} />
            </Link>
          </div>
        </div>
      </Paper>
    </Grid>
  );
};

export default SignIn;
