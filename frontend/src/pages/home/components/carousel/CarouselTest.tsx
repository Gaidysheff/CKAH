import "./Carousel.scss";

import CarouselSvgSelector from "./CarouselSvgSelector";
import React from "react";
import Slider from "react-slick";

type Props = {};

const CarouselTest = (props: Props) => {
  const sliderSettings = {
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="carousel">
      <div className="carousel__leftArrowStyles">❰</div>
      <div className="carousel__rightArrowStyles">❱</div>
      <div className="carousel__slider">
        <Slider {...sliderSettings}>
          <div className="carousel__slide">
            <div className="carousel__icon">
              <CarouselSvgSelector id="speed" />
            </div>
            <div className="carousel__description">
              Высокая и оперативная скорость обработки заявки
            </div>
          </div>
          <div className="carousel__slide">
            <div className="carousel__icon">
              <CarouselSvgSelector id="database" />
            </div>
            <div className="carousel__description">
              Огромная комплексная база данных, обеспечивающая объективный ответ
              на запрос
            </div>
          </div>
          <div className="carousel__slide">
            <div className="carousel__icon">
              <CarouselSvgSelector id="security" />
            </div>
            <div className="carousel__description">
              Защита конфеденциальных сведений, не подлежащих разглашению по
              федеральному законодательству
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CarouselTest;
