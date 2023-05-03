import "./SignInUp.scss";

import { Box, Button, Grid, Link, Paper, TextField } from "@mui/material";

import AuthSvgSelector from "../../AuthSvgSelector";
import React from "react";

type Props = {};

const SignIn = (props: Props) => {
  const paperStyle = {
    width: "381px",
    height: "440px",
    margin: "10px 0 0 0",
    padding: 0,
  };
  const btnStyle = {
    width: "381px",
    height: "59px",
    fontSize: "22px",
    lineHeight: "27px",
    background: "#5970ff",
    "& .MuiButtonBase-root-MuiButton-root": { fontFamily: "Inter" },
  };

  return (
    <Grid>
      <Paper elevation={0} style={paperStyle}>
        <div className="signIn__input-group">
          <div className="signIn__input-block">
            <div className="signIn__label">Логин или номер телефона:</div>
            <TextField
              sx={{
                width: "381px",
                "& .MuiOutlinedInput-input": { height: "14px" },
              }}
              id="outlined-basic"
              label=""
              variant="outlined"
            />
          </div>
          <div className="signIn__input-block">
            <div className="signIn__label">Пароль:</div>
            <TextField
              sx={{
                width: "381px",
                "& .MuiOutlinedInput-input": { height: "14px" },
              }}
              id="outlined-basic"
              label=""
              variant="outlined"
            />
          </div>
        </div>
        <Button variant="contained" style={btnStyle} href="/somewhere">
          Войти
        </Button>

        <Box
          sx={{
            width: "381px",
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
