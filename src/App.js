import React from "react";
import { Fragment } from "react";
import Food from "./components/Food/Food";
import Header from "./components/Header/Header";
import Fav from "./components/Fav/Fav";
import FavPage from "./pages/FavPage";
import Homepage from "./pages/Homepage";
import {Switch,Route,Redirect} from "react-router-dom"
const App = () => {
  return (
    <Switch>
    <Fragment>
      <Route  path='/' exact>

        <Homepage/>

      </Route>

      <Route path='/fav' exact>
        <FavPage/>
      </Route>

    </Fragment>

    </Switch>
  );
};

export default App;
