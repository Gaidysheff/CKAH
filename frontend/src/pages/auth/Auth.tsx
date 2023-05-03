import { Col, Container, Row } from "react-bootstrap";

import AuthSvgSelector from "./AuthSvgSelector";
import SignInUpForm from "./components/form/SignInUpForm";
import style from "./Auth.module.scss";

type Props = {};

const Auth = (props: Props) => {
  return (
    <>
      <div className={style.mycont}>asas</div>
      <Container fluid="xxl" className={style.auth}>
        <Row>
          <Col className={style.auth__left} sm={7}>
            <h3>
              Для оформления подписки на тариф, необходимо авторизоваться.
            </h3>
            <AuthSvgSelector id={"key"} />
          </Col>
          <Col className={style.auth__right} sm={5}>
            <SignInUpForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Auth;
