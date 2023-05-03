import Section_I from "./components/section_I/Section_I";
import Section_II from "./components/section_II/Section_II";
import Section_III from "./components/section_III/Section_III";
import style from "./Home.module.scss";

type Props = {};

const Home = (props: Props) => {
  return (
    <main>
      <div className={style.wrapper}>
        <Section_I />
        <Section_II />
        <Section_III />
      </div>
    </main>
  );
};

export default Home;
