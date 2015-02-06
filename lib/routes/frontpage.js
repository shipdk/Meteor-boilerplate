Router.route("/", {
  name: "frontpage",  
  controller: RoutesController,
  waitOn: function () {
    return Meteor.subscribe("posts");
  },
  data: function () {    
    return Posts.find();
  }
});