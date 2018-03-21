import { Meteor } from "meteor/meteor";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../ui/Home";
import GetACode from "../ui/GetACode";
import Changelog from "../ui/Changelog";
import NotFound from "../ui/NotFound";
import Development from "../ui/Development";
import HowToUse from "../ui/HowToUse";
import AboutApi from "../ui/AboutApi";

export const routes = (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/getcode" component={GetACode} />
      <Route path="/changelog" component={Changelog} />
      <Route path="/development" component={Development} />
      <Route path="/howtouse" component={HowToUse} />
      <Route path="/about-api" component={AboutApi} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
