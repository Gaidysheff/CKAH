import TariffBeginner from "./tariffBeginner/TariffsBeginner";
import TariffBusiness from "./tariffBusiness/TariffsBusiness";
import TariffPro from "./tariffPro/TariffsPro";
import style from "./Tariffs.module.scss";

type Props = {};

const Tariffs = (props: Props) => {
  return (
    <>
      <TariffBeginner />
      <TariffPro />
      <TariffBusiness />
    </>
  );
};

export default Tariffs;
