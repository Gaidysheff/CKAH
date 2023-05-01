import Carousel from "../carousel/Carousel";
import Section_II_SvgSelector from "./Section_II_SvgSelector";
import style from "./Section_II.module.scss";

type Props = {};

const Section_II = (props: Props) => {
  return (
    <div className={style.sectionII}>
      <h2 className={style.sectionII__heading}>Почему именно мы</h2>
      <Carousel />
      <Section_II_SvgSelector id="outcome" />
      <div>Резерв</div>
    </div>
  );
};

export default Section_II;
