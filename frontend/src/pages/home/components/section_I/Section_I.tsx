import ButtonSelector from "../buttons/ButtonSelector";
import { Link } from "react-router-dom";
import Section_I_SvgSelector from "./Section_I_SvgSelector";
import style from "./Section_I.module.scss";

type Props = {};

const Section_I = (props: Props) => {
  return (
    <div className={style.container}>
      <div className={style.sectionI}>
        <div className={style.sectionI__content}>
          <h1 className={style.sectionI__heading}>
            сервис по поиску публикаций <br />о компании <br />
            по его ИНН
          </h1>
          <div className={style.sectionI__text}>
            Комплексный анализ публикаций, получение данных в формате PDF на
            электронную почту.
          </div>
          <Link to="/objectsearch" className={style.sectionI__button}>
            <ButtonSelector id="data_request" />
          </Link>
        </div>
        <div className={style.sectionI__image}>
          <Section_I_SvgSelector id="search" />
        </div>
      </div>
    </div>
  );
};

export default Section_I;
