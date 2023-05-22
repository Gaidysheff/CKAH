import "./SignInUp.scss";

import { Alert, Box, Button, Link, TextField } from "@mui/material";

import { doUserRegistration } from "../../../../parse";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type Props = {};

const SignUp = (props: Props) => {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
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

    let username = email.split("@")[0];
    try {
      let user = await doUserRegistration(username, password);
      user.setEmail(email).save();
      navigate("/user");
    } catch (error: any) {
      console.error(error.message);
      setError(error.message);
    }
  };

  return (
    <div className="signUp">
      <div className="signUp__wrapper" id="register">
        {error && (
          <Alert severity="error" sx={{ my: 2 }}>
            {error}
          </Alert>
        )}
        <Box component="form" onSubmit={onSubmit}>
          <TextField
            label="username"
            variant="outlined"
            autoComplete="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{ mt: 1 }}
            fullWidth
            size="small"
          />
          <TextField
            label="Email"
            variant="outlined"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mt: 3 }}
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
