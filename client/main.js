import { Meteor } from "meteor/meteor";
import React from "react";
import ReactDOM from "react-dom";

import { routes } from "../imports/routes/routes";
import "../imports/startup/simple-schema-configuration.js";

Meteor.startup(() => {
  Meteor.call("links.expire");
  ReactDOM.render(routes, document.getElementById("app"));
});
