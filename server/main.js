import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';

import { Links } from '../imports/api/links';
import '../imports/startup/simple-schema-configuration.js';

Meteor.startup(() => {
  WebApp.connectHandlers.use((req, res, next) => {
      const code = req.url.slice(1);
      const link = Links.findOne({ code });

      if (link) {
          res.statusCode = 302;
          res.setHeader('Location', link.url);
          res.end();
      } else {
          next();
      }
  });
});
