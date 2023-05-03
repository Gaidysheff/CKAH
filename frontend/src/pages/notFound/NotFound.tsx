import { Container } from "@mui/material";
import Under_Construction from "../../assets/images/notFound/Page_Under_Construction.jpg";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <Container sx={{ margin: "0 auto" }}>
      <img src={Under_Construction} alt="Page is under construction" />
    </Container>
  );
};

export default NotFound;
