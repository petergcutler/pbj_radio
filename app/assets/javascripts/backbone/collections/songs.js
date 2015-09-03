App.Collections.Songs = Backbone.Collection.extend({
  model: App.Models.Song,
  url: '/songs',

  initialize: function() {
    console.log('New Songs Collection');
  }
});
