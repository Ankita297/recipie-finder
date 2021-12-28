import React from "react";
import { Fragment } from "react";
import FavPage from "./pages/FavPage";
import Homepage from "./pages/Homepage";
import { Switch, Route, Redirect } from "react-router-dom";
const App = () => {
  return (
    <Switch>
      <Fragment>
        <Route path="/" exact>
          <Homepage />
        </Route>

        <Route path="/fav" exact>
          <FavPage />
        </Route>
        <Route path='*'>
          <Redirect to="/"></Redirect>
        </Route>
      </Fragment>
    </Switch>
  );
};

export default App;
