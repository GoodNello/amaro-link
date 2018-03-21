import { Meteor } from "meteor/meteor";
import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/js/bootstrap.min.js";
import { routes } from "../imports/routes/routes";
import "../imports/startup/simple-schema-configuration.js";

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById("app"));
});
