import "./styles/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button, Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";

import Auth from "./pages/auth/Auth";
import Footer from "./shared/footer/Footer";
import Header from "./shared/header/Header";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import Outcome from "./pages/outcome/Outcome";
import Search from "./pages/search/Search";

type Props = {};

const App = (props: Props) => {
  return (
    <>
      <Header />
      <Button variant="primary" size="lg" className="mt-5 mb-5">
        TEST
      </Button>
      <Container className="container-fluid">
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="account" element={<Auth />} />
            <Route path="objectsearch" element={<Search />} />
            <Route path="documents" element={<Outcome />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Container>
      <Footer />
    </>
  );
};

export default App;
