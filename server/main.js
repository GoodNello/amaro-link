import { Meteor } from "meteor/meteor";
import { WebApp } from "meteor/webapp";
import bodyParser from "body-parser";

import { Links, API } from "../imports/api/links";
import "../imports/startup/simple-schema-configuration.js";

Meteor.startup(() => {
  WebApp.connectHandlers.use("/api/link", bodyParser.json());
  WebApp.connectHandlers.use(
    "/api/link",
    bodyParser.urlencoded({ extended: true })
  );
  WebApp.connectHandlers.use("/api/link", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.method === "OPTIONS") {
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
      res.end("Set OPTIONS.");
    } else {
      API.handleRequest(res, req);
    }
  });

  WebApp.connectHandlers.use((req, res, next) => {
    const code = req.url.slice(1, 12);
    Links.remove({ expiresAt: { $lte: new Date().getTime() } });
    const link = Links.findOne({ code });

    if (link) {
      res.statusCode = 302;
      res.setHeader("Location", link.url);
      res.end();
    } else {
      next();
    }
  });
});
