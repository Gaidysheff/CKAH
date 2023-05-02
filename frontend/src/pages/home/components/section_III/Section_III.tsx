import React from "react";
import style from "./Section_III.module.scss";

type Props = {};

const Section_III = (props: Props) => {
  return (
    <div className={style.sectionIII}>
      <h2 className={style.sectionIII__heading}>наши тарифы</h2>
      <div className={style.sectionIII__wrapper}>BOX</div>
    </div>
  );
};

export default Section_III;
