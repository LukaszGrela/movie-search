import React from "react";
import { Router, Redirect, Route, Switch } from "react-router-dom";
import { history } from "../../store";
import Home from "../Home/Home";

export enum Paths {
  HOME = "/",
  RESULTS = "/movies",
  MOVIE = "/movie/:imdbId",
}

const AppRouter: React.FC = (): JSX.Element => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={Paths.HOME}>
          <Home />
        </Route>
        <Route exact path={Paths.RESULTS}>
          <p>Implement Movies Path</p>
        </Route>
        <Route exact path={Paths.MOVIE}>
          <p>Implement Movie detail Path</p>
        </Route>
        <Redirect to={Paths.HOME} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
