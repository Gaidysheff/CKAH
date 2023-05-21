import "./styles/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button, Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";

import Auth from "./pages/auth/Auth";
import Footer from "./shared/footer/Footer";
import Header from "./shared/header/HeaderOld";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import Outcome from "./pages/outcome/Outcome";
import Search from "./pages/search/Search";
import User from "./pages/auth/components/Users";

type Props = {};

const App = (props: Props) => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="authorization" element={<Auth />} />
          <Route path="objectsearch" element={<Search />} />
          <Route path="documents" element={<Outcome />} />
          <Route path="user" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
