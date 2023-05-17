import React from "react";
import style from "./Labels.module.scss";

type Props = { id: string };

const Labels = ({ id }: Props) => {
  switch (id) {
    case "tech_news":
      return <button className={style.tech}>Технические новости</button>;
    default:
      return null;
  }
};

export default Labels;
