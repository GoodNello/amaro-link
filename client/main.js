import { Meteor } from "meteor/meteor";
import React from "react";
import ReactDOM from "react-dom";
import { HTTP } from "meteor/http";

import { routes } from "../imports/routes/routes";
import "../imports/startup/simple-schema-configuration.js";

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById("app"));

  HTTP.get(
    "http://localhost:3000/api/v1/link",
    {
      params: { code: "2424" }
    },
    function(error, response) {
      if (error) {
        console.log(error);
      } else {
        console.log("Data:", response.data);
      }
    }
  );

  /*   HTTP.post(
    "http://localhost:3000/api/v1/link",
    {
      data: {
        url: "http://www.repubblica.it"
      }
    },
    function(error, response) {
      if (error) {
        console.log(error);
      } else {
        console.log("Response:", response.message);
        console.log("Code:", response.code);
      }
    }
  ); */
});
