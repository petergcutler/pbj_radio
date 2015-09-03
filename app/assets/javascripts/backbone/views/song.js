App.Views.Song = Backbone.View.extend({
  className: 'song',
  tagName: 'div',

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.template = HandlebarsTemplates['songs/show'];
    this.render();
  },

  events: {
    'click': 'updatePlayer'
  },

  render: function() {
    var renderedHTML = this.template(this.model.toJSON());
    this.$el.html(renderedHTML);
  },

  updatePlayer: function() {
    App.router.navigate("songs/" + this.model.id + "/play");
    App.Views.player.setSong(this.model);
  }
});
