import React from "react";
import { HashRouter, Redirect, Route, Router, Switch } from "react-router-dom";
import history from "../lib/history";
import MainPage from "../pages/MainPage";

function RouterConfig() {
  return (
    <Router basename="/" history={history}>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="*" exact component={<Redirect from="*" to="/" />} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
