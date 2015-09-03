App.Views.SongForm = Backbone.View.extend({

  el: "#new-song-modal",

  events: {
    'click .submit': 'addSong',
    'click .close' : 'closeForm'
  },

  addSong: function(){

    event.preventDefault()

    var data = {
      artist: this.$("[id='new-song-artist']").val(),
      title: this.$("[id='new-song-title']").val(),
      genre: this.$("[id='new-song-genre']").val(),
      audio_url: this.$("[id='new-song-audio-url']").val(),
      album_art: this.$("[id='new-song-album-art']").val()
    }

    App.Collections.songs.create(data)
    this.closeForm()
  },

  closeForm: function(){
    this.$el.fadeOut()
    App.Routers.song.navigate('')
  }

})
