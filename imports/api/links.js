import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";
import securePin from "secure-pin";
import { APIKeys } from "./apikeys";

const API_VERSION = "v1";

export const Links = new Mongo.Collection("links");
export const API = {
  authentication: function(apiKey = 0) {
    const keyExists = APIKeys.findOne({ key: apiKey });
    if (keyExists) {
      return true;
    } else {
      return false;
    }
  },
  connection: function(request) {
    const getRequestContents = API.utility.getRequestContents(request);
    const apiKey = getRequestContents.api_key;
    const isValid = API.authentication(apiKey);

    if (isValid) {
      Meteor.call("apiKeys.trackRequest");
      delete getRequestContents.api_key;
      return { data: getRequestContents };
    } else {
      return { error: 401, message: "Invalid API key." };
    }
  },
  handleRequest: function(context, request) {
    const connection = API.connection(request);
    if (!connection.error) {
      API.methods.link[request.method](context, request);
    } else {
      API.utility.response(context, 401, connection);
    }
  },
  methods: {
    link: {
      GET: function(context, request) {
        if (request.query.code) {
          const link = Links.findOne({ code: request.query.code });

          if (link) {
            link["api_version"] = API_VERSION;
            API.utility.response(context, 200, link);
          } else {
            API.utility.response(context, 404, {
              error: 404,
              message:
                "Cannot find a link associated to code " + request.query.code
            });
          }
        } else {
          API.utility.response(context, 401, {
            error: 401,
            message: "No code specified in request."
          });
        }
      },
      POST: function(context, request) {
        const hasData = API.utility.hasData(request.body);

        if (hasData) {
          const link = Meteor.call(
            "links.insert",
            request.body.url,
            (err, res) => {
              if (err) {
                API.utility.response(context, 403, {
                  error: 403,
                  message: "Invalid POST call: the link is not a valid URL."
                });
              } else {
                API.utility.response(context, 200, {
                  code: res,
                  api_version: API_VERSION,
                  message: "Code successfully created."
                });
              }
            }
          );
        }
      }
    }
  },
  resources: {},
  utility: {
    getRequestContents: function(request) {
      switch (request.method) {
        case "GET":
          return request.query;
        case "POST":
          return request.body;
      }
    },
    response: function(context, statusCode, data) {
      context.setHeader("Content-Type", "application/json");
      context.statusCode = statusCode;
      context.end(JSON.stringify(data));
    }
  }
};

if (Meteor.isServer) {
  Meteor.publish("links", function() {
    return Links.find();
  });
}

Meteor.methods({
  "links.insert"(url) {
    new SimpleSchema({
      url: {
        type: String,
        label: "Your link",
        regEx: SimpleSchema.RegEx.Url
      }
    }).validate({ url });

    const code = securePin.generatePinSync(4);

    Links.insert({
      code,
      url
    });

    return code;
  }
});

if (Meteor.isServer) {
  Meteor.publish("links.getByCode", function(code) {
    if (!code) {
      return this.ready();
    }

    new SimpleSchema({
      code: {
        type: Number,
        label: "Your code"
      }
    }).validate({ code });

    const options = { fields: { url: 1 } };

    return Links.findOne({ code }, options);
  });
}
