// { "path" : "collections/__modelName__.js" }
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
      type: Date,
      denyUpdate: true
    }
  })
);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  __modelName__.allow({
    insert : function () {
      return true;
    },
    update : function () {
      return true;
    },
    remove : function () {
      return true;
    }
  });
}

// Collections behaviours
__modelName__.timestampable();
__modelName__.softRemovable();
__modelName__.trackable('__modelName__');
