UI.registerHelper("Posts", function() {
  return Posts.find({}, { sort: { createDate: -1 }});
});