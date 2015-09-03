App.Views.SongForm = Backbone.View.extend({
  el: '#new-song-modal',

  events: {
    'click .submit': 'createSong',
    'click .close': 'closeForm'
  },

  createSong: function() {
    // grab form data
    var formData = {
      artist:      $('#new-song-artist').val(),
      title:       $('#new-song-title').val(),
      genre:       $('#new-song-genre').val(),
      audio_url:   $('#new-song-audio-url').val(),
      album_art:   $('#new-song-album-art').val()
    };

    this.collection.create(formData);
    this.closeForm();

    // clear the form
    $('input').val();

    // fade out the form and scroll the new song into view
    $('.song').last().get(0).scrollIntoView();
  },

  closeForm: function() {
    App.router.navigate('');
    App.Views.songForm.$el.fadeOut();
  }

});
