import { Mongo } from "meteor/mongo";
import { apikey as keyGen } from "apikeygen";

export const APIKeys = new Mongo.Collection("apikeys");

if (Meteor.isServer) {
  Meteor.publish("APIKeys", function() {
    return APIKeys.find({});
  });
}

Meteor.methods({
  "apiKeys.generateKey"() {
    const key = keyGen();

    APIKeys.insert({
      key,
      requests: 0
    });

    return key;
  },
  "apiKeys.trackRequest"(apiKey) {
    APIKeys.update(
      { key: apiKey },
      {
        $inc: {
          requests: 1
        }
      }
    );
  }
});
