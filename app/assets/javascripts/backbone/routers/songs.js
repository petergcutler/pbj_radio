App.Router = Backbone.Router.extend({
  routes: {
    "":               "index",
    "songs/new":      "new",
    "songs/:id/play": "play"
  },

  initialize: function() {
    App.Collections.songs = new App.Collections.Songs();

    App.Views.player   = new App.Views.Player();
    App.Views.songForm = new App.Views.SongForm({collection: App.Collections.songs});
    App.Views.library  = new App.Views.SongList({collection: App.Collections.songs});

    App.Collections.songs.fetch({reset: true});
  },

  index: function() {
    $("#new-song-modal").hide();
  },

  new: function() {
    $("#new-song-modal").fadeIn();
  },

  play: function(id) {
    song = new App.Models.Song({id: id});
    song.fetch().then(function() {
      App.Views.player.setSong(song);
    });
  }
});
