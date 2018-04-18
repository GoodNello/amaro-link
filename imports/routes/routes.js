import { Meteor } from "meteor/meteor";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import UseACode from "../ui/UseACode";
import GetACode from "../ui/GetACode";
import Changelog from "../ui/Changelog";
import NotFound from "../ui/NotFound";
import HowToUse from "../ui/HowToUse";
import AboutApi from "../ui/AboutApi";

export const routes = (
  <Router>
    <Switch>
      <Route exact path="/" component={UseACode} />
      <Route path="/getcode" component={GetACode} />
      <Route path="/changelog" component={Changelog} />
      <Route path="/howtouse" component={HowToUse} />
      <Route path="/about-api" component={AboutApi} />
      <Route path="/:code" component={NotFound} />
    </Switch>
  </Router>
);
