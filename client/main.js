import { Meteor } from "meteor/meteor";
import React from "react";
import ReactDOM from "react-dom";
import { HTTP } from "meteor/http";

import { routes } from "../imports/routes/routes";
import "../imports/startup/simple-schema-configuration.js";

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById("app"));

  /*  HTTP.call(
    "POST",
    "http://localhost:3000/api/v1/link",
    {
      data: {
        api_key: "MMl6BosXrvuye9ywU6gtp45DBisfT5vFvd6b3Zum",
        url: "http://www.ansa.it/"
      }
    },
    function(error, response) {
      if (error) {
        console.log(error);
      } else {
        console.log("Response:", response);
        console.log("Code:", response.data.code);
      }
    }
  ); */

  /* HTTP.call(
    "GET",
    "http://localhost:3000/api/v1/link",
    {
      params: {
        api_key: "MMl6BosXrvuye9ywU6gtp45DBisfT5vFvd6b3Zum",
        code: "2424"
      }
    },
    function(error, response) {
      if (error) {
        console.log(error);
      } else {
        console.log("Response:", response);
      }
    }
  ); */
});

// MMl6BosXrvuye9ywU6gtp45DBisfT5vFvd6b3Zum
