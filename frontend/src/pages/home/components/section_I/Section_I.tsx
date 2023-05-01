import ButtonSelector from "../buttons/ButtonSelector";
import Section_I_SvgSelector from "./Section_I_SvgSelector";
import style from "./Section_I.module.scss";

type Props = {};

const Section_I = (props: Props) => {
  return (
    <div className={style.sectionI}>
      <div className={style.sectionI__content}>
        <h1 className={style.sectionI__heading}>
          сервис по поиску публикаций <br /> о компании <br />
          по его ИНН
        </h1>
        <div className={style.sectionI__text}>
          Комплексный анализ публикаций, получение данных в формате PDF на
          электронную почту.
        </div>
        <ButtonSelector id="data_request" />
      </div>
      <div className={style.sectionI__image}>
        <Section_I_SvgSelector id="search" />
      </div>
    </div>
  );
};

export default Section_I;
