import { Col, Container, Row } from "react-bootstrap";

import style from "./Auth.module.scss";

type Props = {};

const Auth = (props: Props) => {
  return (
    <>
      <div className={style.mycont}>asas</div>
      <Container fluid="xxl">
        <Row>
          <Col className={style.smth1} sm={7}>
            Left
          </Col>
          <Col className={style.smth2} sm={5}>
            Right
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Auth;
