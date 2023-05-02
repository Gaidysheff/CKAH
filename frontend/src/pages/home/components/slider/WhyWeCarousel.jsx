import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

import Slider from "react-slick";

// type Props = { slides: any };

const WhyWeCarousel = ({ slides }) => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <div className="tag">
        <h1>Image Gallery</h1>
      </div>
      <div className="imgslider">
        <Slider {...settings}>
          {slides.map((item) => (
            <div key={item.id}>
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default WhyWeCarousel;
