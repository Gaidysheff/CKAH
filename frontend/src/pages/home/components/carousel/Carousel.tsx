import CarouselSvgSelector from "./CarouselSvgSelector";
import style from "./Carousel.module.scss";

type Props = {};

const Carousel = (props: Props) => {
  return (
    <div className={style.carousel}>
      <div className={style.carousel__slider}>
        <div className={style.carousel__slide}>
          <div className={style.carousel__icon}>
            <CarouselSvgSelector id="speed" />
          </div>
          <div className={style.carousel__text}>
            Высокая и оперативная скорость обработки заявки
          </div>
        </div>
        <div className={style.carousel__slide}>
          <div className={style.carousel__icon}>
            <CarouselSvgSelector id="database" />
          </div>
          <div className={style.carousel__text}>
            Огромная комплексная база данных, обеспечивающая объективный ответ
            на запрос
          </div>
        </div>
        <div className={style.carousel__slide}>
          <div className={style.carousel__icon}>
            <CarouselSvgSelector id="security" />
          </div>
          <div className={style.carousel__text}>
            Защита конфеденциальных сведений, не подлежащих разглашению по
            федеральному законодательству
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
