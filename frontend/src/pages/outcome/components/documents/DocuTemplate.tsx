import "./DocuTemplate.scss";

import ButtonSelector from "../../../home/components/buttons/ButtonSelector";
import Labels from "../labels/Labels";
import React from "react";
import image1 from "../../../../assets/images/outcomePage/image-1.png";

type Props = {};

const DocuTemplate = (props: Props) => {
  return (
    <div className="docuTemplate">
      <div className="docuTemplate__source">
        <div className="docuTemplate__date">13.09.2021</div>
        <div className="docuTemplate__link">Комсомольская правда KP.RU</div>
      </div>
      <div className="docuTemplate__title">
        Скиллфэктори - лучшая онлайн-школа для будущих айтишников
      </div>
      <a href="/go_to_somewhere" className="docuTemplate__label">
        <Labels id="tech_news" />
      </a>
      <div className="docuTemplate__image">
        <img src={image1} alt="" />
      </div>
      <p className="docuTemplate__text">
        SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь.
        С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов,
        самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере,
        Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других
        топовых компаниях. <br />
        <br /> Принципы SkillFactory: акцент на практике, забота о студентах и
        ориентир на трудоустройство. 80% обучения — выполнение упражнений и
        реальных проектов. Каждого студента поддерживают менторы, 2
        саппорт-линии и комьюнити курса. А карьерный центр помогает составить
        резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.
      </p>
      <div className="docuTemplate__bottom">
        <a href="/go_to_somewhere" className="docuTemplate__button">
          <ButtonSelector id="read_in_source" />
        </a>
        <div className="docuTemplate__statistics">2 543 слова</div>
      </div>
    </div>
  );
};

export default DocuTemplate;
