App.Routers.Song = Backbone.Router.extend({

  routes: {
    '' : 'index',
    'songs/new' : 'newSong',
    'songs/:id/play' : 'playSong'
  },

  initialize: function(){
    App.Collections.songs = new App.Collections.Songs()
    App.Views.songForm = new App.Views.SongForm()
    App.Views.songList = new App.Views.SongList({collection: App.Collections.songs})
  },

  index: function(){
    App.Views.songForm.$el.fadeOut()
    App.Collections.songs.fetch()
  },

  newSong: function(song){
    this.index()
    console.log("adding a new song")
    App.Views.songForm.$el.toggle()
  },

  playSong: function(id){
    App.Collections.songs.fetch().then(function() {
      var song = App.Collections.songs.get(id)
      var player = new App.Views.Player( {model: song} )
    })
  }

})
