import style from "./Button.module.scss";

type Props = { id: string };

const ButtonSelector = ({ id }: Props) => {
  switch (id) {
    case "data_request":
      return <button className={style.shorter}>Запросить данные</button>;
    case "more_details":
      return <button className={style.longer}>Подробнее</button>;
    default:
      return null;
  }
};

export default ButtonSelector;
