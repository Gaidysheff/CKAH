import React from "react";
import Tariffs from "../tariffs/Tariffs";
import style from "./Section_III.module.scss";

type Props = {};

const Section_III = (props: Props) => {
  return (
    <div className={style.container}>
      <div className={style.sectionIII}>
        <h2 className={style.sectionIII__heading}>наши тарифы</h2>
        <div className={style.sectionIII__tariffs}>
          <Tariffs />
        </div>
      </div>
    </div>
  );
};

export default Section_III;
