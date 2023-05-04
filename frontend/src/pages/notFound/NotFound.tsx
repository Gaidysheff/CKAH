import { Container, Typography } from "@mui/material";

import Under_Construction from "../../assets/images/notFound/Page_Under_Construction.jpg";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <Container>
      <Typography align="center">
        <img src={Under_Construction} alt="Page is under construction" />
      </Typography>
    </Container>
  );
};

export default NotFound;
