import "./styles/styles.scss";

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
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="account" element={<Auth />} />
          <Route path="objectsearch" element={<Search />} />
          <Route path="documents" element={<Outcome />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
