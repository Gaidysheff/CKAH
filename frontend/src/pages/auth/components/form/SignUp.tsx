import "./SignInUp.scss";

import { Container } from "@mui/material";
import React from "react";
import Under_Construction from "../../../../assets/images/notFound/Page_Under_Construction.jpg";

type Props = {};

const SignUp = (props: Props) => {
  return (
    <div className="signUp__wrapper image_wrapper">
      <img src={Under_Construction} alt="Page is under construction" />
    </div>
  );
};

export default SignUp;
