import "./TariffsBeginner.scss";

import ButtonSelector from "../../buttons/ButtonSelector";
import { Link } from "react-router-dom";
import TariffsSvgSelector from "../TariffsSvgSelector";

type Props = {};

const TariffBeginner = (props: Props) => {
  return (
    <div className="tariff">
      <div className="tariff__header">
        <div className="tariff__text_container">
          <div className="tariff__title">Beginner</div>
          <div className="tariff__subtitle">Для небольшого исследования</div>
        </div>
        <div className="tariff__icon">
          <TariffsSvgSelector id="beginner" />
        </div>
      </div>
      <div className="tariff__body">
        <div className="tariff__price_content">
          <div className="tariff__amount">
            <div className="tariff__current">799 ₽</div>
            <div className="tariff__previous">1 200 ₽</div>
          </div>
          <p className="tariff__monthly">
            или 150 ₽/мес. при рассрочке на 24 мес.
          </p>
        </div>
        <div className="tariff__description">
          <p className="tariff__include">В тариф входит:</p>
          <ul className="tariff__items">
            <li className="tariff__item">Безлимитная история запросов</li>
            <li className="tariff__item">Безопасная сделка</li>
            <li className="tariff__item">Поддержка 24/7</li>
          </ul>
        </div>
        <Link to="/go_to_somewhere" className="tariff__button">
          <ButtonSelector id="more_details" />
        </Link>
      </div>
    </div>
  );
};

export default TariffBeginner;
