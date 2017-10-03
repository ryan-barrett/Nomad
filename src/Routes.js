import React from "react";
import { Route } from "react-router";
import Splash from "./components/Splash";
import Main from "./components/Main";

var routes = (
  <div>
    <Route path="/" component={Splash} />
    <Route path="/main" component={Main} />
  </div>
);

export default routes;
