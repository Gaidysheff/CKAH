import Carousel from "../carousel/Carousel";
import CarouselTest from "../carousel/CarouselTest";
import Section_II_SvgSelector from "./Section_II_SvgSelector";
import style from "./Section_II.module.scss";

// import WhyWeCarousel from "../slider/WhyWeCarousel";
// import slides from "../slider/slides";

type Props = {};

const Section_II = (props: Props) => {
  return (
    <div className={style.container}>
      <div className={style.sectionII}>
        <h2 className={style.sectionII__heading}>Почему именно мы</h2>
        <div className={style.sectionII__carousel}>
          {/* <Carousel /> */}
          <CarouselTest />
          {/* <WhyWeCarousel slides={slides} /> */}
        </div>
        <div className={style.sectionII__image}>
          <Section_II_SvgSelector id="outcome" />
        </div>
        <div className={style.sectionII__image_smaller}>
          <Section_II_SvgSelector id="Outcome" />
        </div>
      </div>
    </div>
  );
};

export default Section_II;
