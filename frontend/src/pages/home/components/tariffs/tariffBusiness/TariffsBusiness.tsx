import ButtonSelector from "../../buttons/ButtonSelector";
import TariffsSvgSelector from "../TariffsSvgSelector";
import style from "./TariffsBusiness.module.scss";

type Props = {};

const TariffBusiness = (props: Props) => {
  return (
    <>
      <div className={style.tariff}>
        <div className={style.tariff__header}>
          <div className={style.tariff__text_container}>
            <div className={style.tariff__title}>Business</div>
            <div className={style.tariff__subtitle}>
              Для корпоративных клиентов
            </div>
          </div>
          <div className={style.tariff__icon}>
            <TariffsSvgSelector id="business" />
          </div>
        </div>
        <div className={style.tariff__body}>
          <div className={style.tariff__price_content}>
            <div className={style.tariff__amount}>
              <div className={style.tariff__current}>2 379 ₽</div>
              <div className={style.tariff__previous}>3 700 ₽</div>
            </div>
            <p className={style.tariff__monthly}>
              <br />
            </p>
          </div>
          <div className={style.tariff__description}>
            <p className={style.tariff__include}>В тариф входит:</p>
            <ul className={style.tariff__items}>
              <li className={style.tariff__item}>Все пункты тарифа Pro</li>
              <li className={style.tariff__item}>
                Безлимитное количество запросов
              </li>
              <li className={style.tariff__item}>Приоритетная поддержка</li>
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

export default TariffBusiness;
