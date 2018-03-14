import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Links = new Mongo.Collection('links');

if (Meteor.isServer) {
    Meteor.publish('links', function () {
        return Links.find();
    });
}

Meteor.methods({
    'links.insert'(code, url) {

        new SimpleSchema({
                url: {
                    type: String,
                    label: 'Your link',
                    regEx: SimpleSchema.RegEx.Url
                }
            }).validate({url});

        Links.insert({
            code,
            url
        });
    }
});
