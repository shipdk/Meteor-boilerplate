Meteor.publish("posts", function () {
  // Publish all documents in messages collection
  return Posts.find();
});