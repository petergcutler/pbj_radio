App.Views.Player = Backbone.View.extend({
  el: '#player',

  initialize: function() {
    console.log("player loaded.");
    this.template = HandlebarsTemplates['songs/player'];
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    var renderedHTML = this.template(this.model.toJSON());
    this.$el.html(renderedHTML);
  }
})
