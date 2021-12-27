import React from "react";
import { Fragment } from "react";
import Food from "./components/Food/Food";
import Header from "./components/Header/Header";
import Fav from "./components/Fav/Fav";

const App = () => {
  return (
    <Fragment>
      <Fav />
      <Header />
      <Food />
    </Fragment>
  );
};

export default App;
