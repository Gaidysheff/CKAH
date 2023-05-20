// import * as dotenv from "dotenv";

import App from "./App";
import { AppProvider } from "./providers/AppProvider";
import { Auth0Provider } from "@auth0/auth0-react";
import Auth0ProviderWithNavigate from "./providers/Auth0ProviderWithNavigate";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";

// import { store } from "./store/store";

// const domain = process.env.REACT_APP_AUTH0_DOMAIN as string;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID as string;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      > */}
      {/* <Auth0ProviderWithNavigate> */}
      <AppProvider>
        <App />
      </AppProvider>
      {/* </Auth0ProviderWithNavigate> */}
      {/* </Auth0Provider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("app")
);
