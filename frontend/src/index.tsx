import App from "./App";
import React from "react";
import ReactDOM from "react-dom";

// import { store } from "./store/store";

// import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}

    <App />

    {/* </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById("app")
);
