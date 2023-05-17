import style from "./Button.module.scss";

type Props = { id: string };

const ButtonSelector = ({ id }: Props) => {
  switch (id) {
    case "data_request":
      return <button className={style.shorter}>Запросить данные</button>;
    case "more_details":
      return <button className={style.longer}>Подробнее</button>;
    case "into_cabinet":
      return (
        <button className={style.longer_user_registered}>
          Перейти в личный кабинет
        </button>
      );
    case "search":
      return <button className={style.search}>Поиск</button>;
    case "show_more":
      return <button className={style.outcome}>Показать больше</button>;
    case "read_in_source":
      return <button className={style.docu}>Читать в источнике</button>;
    default:
      return null;
  }
};

export default ButtonSelector;
