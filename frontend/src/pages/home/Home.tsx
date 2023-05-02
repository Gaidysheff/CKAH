import { Button, Container } from "react-bootstrap";

import Section_I from "./components/section_I/Section_I";
import Section_II from "./components/section_II/Section_II";
import Section_III from "./components/section_III/Section_III";
import Section_I_BS from "./components/section_I/Section_I_BS";
import style from "./Home.module.scss";

type Props = {};

const Home = (props: Props) => {
  return (
    <main className={style.container}>
      <div className={style.wrapper}>
        <Section_I_BS />
        <Section_I />
        <Section_II />
        <Section_III />
      </div>
    </main>
  );
};

export default Home;
