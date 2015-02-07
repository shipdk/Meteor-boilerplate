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
    }
});

Posts.attachSchema(Schemas.Posts);

// Collections behaviours 
Posts.timestampable();
Posts.softRemovable();
Posts.trackable("posts");
