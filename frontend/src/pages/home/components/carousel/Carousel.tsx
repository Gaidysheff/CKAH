import "./Carousel.scss";

import CarouselSvgSelector from "./CarouselSvgSelector";
import Slider from "react-slick";
import { useState } from "react";

// type Props = { slides: any };

const Carousel = (slides: any) => {
  const sliderSettings = {
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const cardContent = [
    {
      id: 1,
      icon: <CarouselSvgSelector id="speed" />,
      description: "Высокая и оперативная скорость обработки заявки",
    },
    {
      id: 2,
      icon: <CarouselSvgSelector id="database" />,
      description:
        "Огромная комплексная база данных, обеспечивающая объективный ответ на запрос",
    },
    {
      id: 3,
      icon: <CarouselSvgSelector id="security" />,
      description:
        "Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству",
    },
  ];
  return (
    <div className="carousel">
      <div className="carousel__leftArrowStyles" onClick={goToPrevious}>
        ❰
      </div>
      <div className="carousel__rightArrowStyles" onClick={goToNext}>
        ❱
      </div>
      <div className="carousel__slider">
        <Slider {...sliderSettings}>
          {cardContent.map((card, index) => (
            <div className="carousel__slide">
              <div key={index}>
                <div className="carousel__icon">{card.icon}</div>
                <p className="carousel__description">{card.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
