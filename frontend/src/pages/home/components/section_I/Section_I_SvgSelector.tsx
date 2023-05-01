import search from "../../../../assets/images/landingPage/image-1.png";

type Props = { id: string };

const Section_I_SvgSelector = ({ id }: Props) => {
  switch (id) {
    case "search":
      return <img src={search} alt="Search image" />;
    default:
      return null;
  }
};
export default Section_I_SvgSelector;
