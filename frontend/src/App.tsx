import "./styles/styles.module.scss";

import { Route, Routes } from "react-router-dom";

import Auth from "./pages/auth/Auth";
import Footer from "./shared/footer/Footer";
import Header from "./shared/header/Header";
import Home from "./pages/home/Home";
import Outcome from "./pages/outcome/Outcome";
import Search from "./pages/search/Search";

type Props = {};

const App = (props: Props) => {
  return (
    <>
      <h1>Hello from App</h1>;
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="account" element={<Auth />} />
        <Route path="objectsearch" element={<Search />} />
        <Route path="documents" element={<Outcome />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
