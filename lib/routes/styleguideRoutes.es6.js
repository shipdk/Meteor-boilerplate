Router.route('/styleguide',  {
  name: 'styleguide',
  waitOn: () => IRLibLoader.load('https://cdnjs.cloudflare.com/ajax/libs/ace/1.1.8/ace.js', {
    success: function(){ 
      console.log("wait on")
    },
    error: function(){ console.log('ERROR CALLBACK'); }
  })
});
