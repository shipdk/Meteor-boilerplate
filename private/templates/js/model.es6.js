// { "path" : "collections/__modelName__.es6.js" }
__modelName__ = new Mongo.Collection('__modelName__');

__modelName__.attachSchema(
  new SimpleSchema({
    title: {
      type: String
    },
    content: {
      type: String
    },
    createdAt: {
      type: Date
    }
  })
);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  __modelName__.allow({
    insert : () => true,
    update : () => true,
    remove : () => true
  });
}

// Collections behaviours
__modelName__.timestampable();
__modelName__.softRemovable();
__modelName__.trackable('__modelName__');
