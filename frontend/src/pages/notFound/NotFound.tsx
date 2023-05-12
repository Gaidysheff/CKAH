import { Container, Typography } from "@mui/material";

import Under_Construction from "../../assets/images/notFound/Page_Under_Construction.jpg";
import style from "./NotFound.module.scss";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div className={style.found}>
      <div className={style.found__wrapper}>
        <img src={Under_Construction} alt="Page is under construction" />
      </div>
    </div>
  );
};

export default NotFound;
