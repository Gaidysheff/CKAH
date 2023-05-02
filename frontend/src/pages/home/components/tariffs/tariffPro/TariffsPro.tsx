import ButtonSelector from "../../buttons/ButtonSelector";
import TariffsSvgSelector from "../TariffsSvgSelector";
import style from "./TariffsPro.module.scss";

type Props = {};

const TariffPro = (props: Props) => {
  return (
    <>
      <div className={style.tariff}>
        <div className={style.tariff__header}>
          <div className={style.tariff__text_container}>
            <div className={style.tariff__title}>Pro</div>
            <div className={style.tariff__subtitle}>Для HR и фрилансеров</div>
          </div>
          <div className={style.tariff__icon}>
            <TariffsSvgSelector id="pro" />
          </div>
        </div>
        <div className={style.tariff__body}>
          <div className={style.tariff__price_content}>
            <div className={style.tariff__amount}>
              <div className={style.tariff__current}>1 299 ₽</div>
              <div className={style.tariff__previous}>2 600 ₽</div>
            </div>
            <p className={style.tariff__monthly}>
              или 279 ₽/мес. при рассрочке на 24 мес.
            </p>
          </div>
          <div className={style.tariff__description}>
            <p className={style.tariff__include}>В тариф входит:</p>
            <ul className={style.tariff__items}>
              <li className={style.tariff__item}>Все пункты тарифа Beginner</li>
              <li className={style.tariff__item}>Экспорт истории</li>
              <li className={style.tariff__item}>
                Рекомендации по приоритетам
              </li>
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

export default TariffPro;
