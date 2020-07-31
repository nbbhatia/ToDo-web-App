import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./store/index.store";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";
import { CookiesProvider } from "react-cookie";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={configureStore()}>
    <BreadcrumbsProvider>
      <BrowserRouter>
        <CookiesProvider>
          <App />
        </CookiesProvider>
      </BrowserRouter>
    </BreadcrumbsProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
