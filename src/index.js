import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { FavContextProvider } from "./store/context";

ReactDOM.render(
  <FavContextProvider>
    {" "}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavContextProvider>,
  document.getElementById("root")
);
