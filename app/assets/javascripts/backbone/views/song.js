App.Views.Song = Backbone.View.extend({
  className: 'song',
  tagName: 'div',

  events: {
    'click .song-image': 'renderPlayer'
  },

  initialize: function(){
    this.template = HandlebarsTemplates['songs/show']
    this.playTemplate = HandlebarsTemplates['songs/player']

    this.render()
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()))
  },

  renderPlayer: function(){
    App.Routers.song.navigate('songs/' + this.model.id + '/play')
    var player = new App.Views.Player({model: this.model})
  }

})
