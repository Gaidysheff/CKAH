// import { ReactSVG } from "react-svg";

import database from "../../../../assets/images/landingPage/database.png";
import security from "../../../../assets/images/landingPage/security.png";
import speed from "../../../../assets/images/landingPage/speed.png";

type Props = { id: string };

const CarouselSvgSelector = ({ id }: Props) => {
  switch (id) {
    case "speed":
      return (
        // <ReactSVG src="../../../../assets/images/landingPage/icon-1.svg" />
        <img src={speed} alt="icon for speedy work" />
      );
    case "database":
      return (
        // <ReactSVG src="../../../../assets/images/landingPage/icon-2.svg" />
        <img src={database} alt="icon for speedy work" />
      );
    case "security":
      return (
        // <ReactSVG src="../../../../assets/images/landingPage/icon-3.svg" />
        <img src={security} alt="icon for speedy work" />
      );
    default:
      return null;
  }
};

export default CarouselSvgSelector;
