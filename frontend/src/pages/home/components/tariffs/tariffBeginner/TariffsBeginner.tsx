import ButtonSelector from "../../buttons/ButtonSelector";
import TariffsSvgSelector from "../TariffsSvgSelector";
import style from "./TariffsBeginner.module.scss";

type Props = {};

const TariffBeginner = (props: Props) => {
  return (
    <>
      <div className={style.tariff}>
        <div className={style.tariff__header}>
          <div className={style.tariff__text_container}>
            <div className={style.tariff__title}>Beginner</div>
            <div className={style.tariff__subtitle}>
              Для небольшого исследования
            </div>
          </div>
          <div className={style.tariff__icon}>
            <TariffsSvgSelector id="beginner" />
          </div>
        </div>
        <div className={style.tariff__body}>
          <div className={style.tariff__price_content}>
            <div className={style.tariff__amount}>
              <div className={style.tariff__current}>799 ₽</div>
              <div className={style.tariff__previous}>1 200 ₽</div>
            </div>
            <p className={style.tariff__monthly}>
              или 150 ₽/мес. при рассрочке на 24 мес.
            </p>
          </div>
          <div className={style.tariff__description}>
            <p className={style.tariff__include}>В тариф входит:</p>
            <ul className={style.tariff__items}>
              <li className={style.tariff__item}>
                Безлимитная история запросов
              </li>
              <li className={style.tariff__item}>Безопасная сделка</li>
              <li className={style.tariff__item}>Поддержка 24/7</li>
            </ul>
          </div>
          <div className={style.tariff__button}>
            <ButtonSelector id="more_details" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TariffBeginner;
