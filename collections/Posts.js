Posts = new Mongo.Collection("posts");

var Schemas = {};

Schemas.Posts = new SimpleSchema({
    head: {
        type: String,
        label: "Title",
        max: 200
    },
    name: {
        type: String,
        label: "Author"
    },
    mail: {
        type: String,
        label: "Email"
    },
    createDate: {
      type: Date,
      autoValue: function(){ return new Date() }
    }
});

Posts.attachSchema(Schemas.Posts);