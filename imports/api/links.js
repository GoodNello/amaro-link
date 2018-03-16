import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";
import securePin from "secure-pin";

export const Links = new Mongo.Collection("links");
export const API = {
  authentication: function(apiKey) {
    // FUTURE SUPPORT FOR API KEYS
  },
  connection: function(request) {
    const getRequestContents = API.utility.getRequestContents(request);
    return { data: getRequestContents };
  },
  handleRequest: function(context, resource, request) {
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
        const hasQuery = API.utility.hasData(request.query);

        if (hasQuery) {
          const link = Links.findOne({ code: request.query.code });

          if (link) {
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
        const hasData = API.utility.hasData(request.query);

        if (hasData) {
          const link = Meteor.call("links.insert", url, (err, res) => {
            if (err) {
              API.utility.response(context, 403, {
                error: 403,
                message: "Invalid POST call: the link is not a valid URL."
              });
            } else {
              API.utility.response(context, 200, {
                code: res,
                message: "Code successfully created."
              });
            }
          });
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
    hasData: function(query) {
      return Object.keys(query).length > 0 ? true : false;
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
