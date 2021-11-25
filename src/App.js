import React from "react";
import { Fragment } from "react";
import Food from "./components/Food/Food";
import Header from "./components/Header/Header";
const App = () => {
  return (
    <Fragment>
      <Header />
      <Food />
    </Fragment>
  );
};

export default App;
