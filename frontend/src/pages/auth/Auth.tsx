import { Col, Row } from "react-bootstrap";
import { Container, Typography } from "@mui/material";

import AuthSvgSelector from "./AuthSvgSelector";
import SignInUpForm from "./components/form/SignInUpForm";
import style from "./Auth.module.scss";

type Props = {};

const Auth = (props: Props) => {
  return (
    <>
      {/* <div className={style.mycont}>container for visibility</div> */}
      <Typography align="center">
        <Container className={style.auth} maxWidth="xl">
          <Row>
            <Col className={style.auth__left} lg={6} xl={7}>
              <h3 className={style.auth__heading}>
                Для оформления подписки на тариф, необходимо авторизоваться.
              </h3>
              <div className={style.auth__image}>
                <AuthSvgSelector id={"key"} />
              </div>
            </Col>
            <Col className={style.auth__right} text-center lg={6} xl={5}>
              <div className={style.auth__form_wrapper}>
                <SignInUpForm />
              </div>
              <div className={style.auth__image_wrapper}>
                <div className={style.auth__image_smaller}>
                  <AuthSvgSelector id={"key"} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Typography>
    </>
  );
};

export default Auth;
