import logo from "./images/global/logo.png";
import logo_reverse from "./images/global/logo-reverse.png";

type Props = { id: string };

const GlobalSvgSelector = ({ id }: Props) => {
  switch (id) {
    case "logo":
      return <img src={logo} alt="Company logo" />;
    case "logo-reverse":
      return <img src={logo_reverse} alt="Company logo in green" />;
    default:
      return null;
  }
};

export default GlobalSvgSelector;
