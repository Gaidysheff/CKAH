import "./Section_III.scss";

import React from "react";
import Tariffs from "../tariffs/Tariffs";

type Props = {};

const Section_III = (props: Props) => {
  return (
    <div className="container">
      <div className="sectionIII">
        <h2 className="sectionIII__heading">наши тарифы</h2>
        <div className="sectionIII__tariffs">
          <Tariffs />
        </div>
      </div>
    </div>
  );
};

export default Section_III;
