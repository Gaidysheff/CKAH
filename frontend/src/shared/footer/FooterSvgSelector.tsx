type Props = { id: string };

import logo_reverse from "../../assets/images/global/logo-reverse.png";

const FooterSvgSelector = ({ id }: Props) => {
  switch (id) {
    case "logo-reverse":
      return <img src={logo_reverse} alt="" />;
    default:
      return null;
  }
};

export default FooterSvgSelector;
