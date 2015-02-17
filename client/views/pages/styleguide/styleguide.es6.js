Template['styleguide'].helpers({
  atoms: () => Session.get('allAtoms'),
  escaped: (data = "grid") => Blaze.toHTML(Blaze.With({title: "{{title}}", text: "{{text}}"}, () => Template.grid )),
  escaped2: () => Blaze.toHTML(new Blaze.View(["grid"]))
});

Template['styleguide'].events({
});


Meteor.call('getAllAtoms', function(error, result) {
  Session.set('allAtoms', result);
  if (error){
    console.log(error.reason);
  }
})

Template.styleguide.rendered = function(){
  console.log("rendered")
  var elements = document.querySelectorAll(".editor") 
  for (var i = 0; i < elements.length; i++) { 
    var editor = ace.edit(elements[i]) 
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/html");
  } 
};


    



// http://stackoverflow.com/questions/19369824/iterate-through-directory-with-assets-gettext
// if(Meteor.isServer) {
//   var done, files;

//   var fs = NPM.Require('fs');

//   files = fs.readdirSync("/", function(e, r) {});

//   done = Meteor.bindEnvironment(function(files) {
//     return _.each(files, function(filename) {
//       var myjson;
//       myjson = JSON.parse(Assets.getText("lib/" + filename));
//       /* do Something */

//     });
//   }, function(e) {
//     throw e;
//   });

//   done(files);
// }