import { Button, Container } from "react-bootstrap";

import ButtonSelector from "../buttons/ButtonSelector";
import Section_I_SvgSelector from "./Section_I_SvgSelector";
import style from "./Section_I.module.scss";

// import search from "../../../../assets/images/landingPage/image-1.png";

type Props = {};

const Section_I_BS = (props: Props) => {
  return (
    <Container>
      <div className="row align-items-start">
        <div className="col-md-6 col-sm-12">
          <h1>
            сервис по поиску публикаций <br />о компании <br />
            по его ИНН
          </h1>
          <div className={style.sectionI__text}>
            Комплексный анализ публикаций, получение данных в формате PDF на
            электронную почту.
          </div>
          <ButtonSelector id="data_request" />
        </div>
        <div className="col-md-6 col-sm-12">
          <Section_I_SvgSelector id="search" />
        </div>
      </div>
    </Container>
  );
};

export default Section_I_BS;
