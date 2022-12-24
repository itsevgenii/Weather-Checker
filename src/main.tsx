import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";



ReactDOM.render(
  <Auth0Provider
    domain="dev-61phno6p2t2tqzkj.uk.auth0.com"
    clientId="vGckypNuUhKeSdlUdeY4tzC1EtapXndN"
    redirectUri={window.location.origin}
  >
    <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById("root")
);