import "./SignInUp.scss";

import {
  Alert,
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";

import React from "react";
import Under_Construction from "../../../../assets/images/notFound/Page_Under_Construction.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type Props = {};

const SignUp = (props: Props) => {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();

    if (!email || !password || !repeatPassword) {
      setError("Please fill out all the fields.");
      return;
    }
    if (password !== repeatPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");

    // TODO: send the register request
    console.log("Registering...");
  };

  return (
    <div className="signUp">
      <div className="signUp__wrapper">
        {error && (
          <Alert severity="error" sx={{ my: 2 }}>
            {error}
          </Alert>
        )}
        <Box component="form" onSubmit={onSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mt: 1 }}
            fullWidth
            size="small"
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mt: 3 }}
            fullWidth
            size="small"
          />
          <TextField
            label="Repeat password"
            variant="outlined"
            type="password"
            autoComplete="repeat-new-password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            sx={{ mt: 3 }}
            fullWidth
            size="small"
          />
          <Button variant="contained" type="submit" sx={{ mt: 3 }} fullWidth>
            Register
          </Button>
          <Box sx={{ mt: 2 }}>
            Already have an account? <Link href="/authorization">Login</Link>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default SignUp;
