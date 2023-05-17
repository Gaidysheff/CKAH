import "./Outcome.scss";

import ButtonSelector from "../home/components/buttons/ButtonSelector";
import Documents from "./components/documents/Documents";
import OutcomeSvgSelector from "./OutcomeSvgSelector";
import React from "react";

type Props = {};

const Outcome = (props: Props) => {
  return (
    <div>
      <div className="outcome">
        <div className="outcome__wrapper">
          <section className="outcome__heading">
            <div className="outcome__content">
              <div className="outcome__content-title">
                Ищем. Скоро <br /> будут результаты
              </div>
              <div className="outcome__content-subtitle">
                Поиск может занять некоторое время, <br /> просим сохранять
                терпение.
              </div>
            </div>
            <div className="outcome__image">
              <OutcomeSvgSelector id="woman" />
            </div>
          </section>
          <section className="outcome__summary">
            <div className="outcome__summary-title">Общая сводка</div>
            <div className="outcome__summary-subtitle">
              Найдено 4 221 вариантов
            </div>
            <div className="outcome__summary-table">ЗДЕСЬ БУДЕТ ТАБЛИЦА</div>
          </section>
          <section className="outcome__documents">
            <div className="outcome__documents-title">Список документов</div>
            <div className="outcome__list">
              <Documents />
            </div>
            <a href="/go_to_somewhere" className="outcome__button">
              <ButtonSelector id="show_more" />
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Outcome;
