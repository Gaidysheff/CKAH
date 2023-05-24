import "./Carousel.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CarouselSvgSelector from "./CarouselSvgSelector";
import Slider from "react-slick";

type Props = {};

const Carousel = (props: Props) => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
    {
      id: 4,
      icon: <CarouselSvgSelector id="speed" />,
      description: "Высокая и оперативная скорость обработки заявки",
    },
    {
      id: 5,
      icon: <CarouselSvgSelector id="database" />,
      description:
        "Огромная комплексная база данных, обеспечивающая объективный ответ на запрос",
    },
    {
      id: 6,
      icon: <CarouselSvgSelector id="security" />,
      description:
        "Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству",
    },
  ];
  return (
    <div className="container">
      <Slider {...settings}>
        {cardContent.map((card, index) => (
          <div className="carousel__slide">
            <div key={index} className="carousel__inner">
              <div className="carousel__icon">{card.icon}</div>
              <p className="carousel__description">{card.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
