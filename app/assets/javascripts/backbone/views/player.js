App.Views.Player = Backbone.View.extend({

  el: '#player',

  initialize: function(){
    this.template = HandlebarsTemplates['songs/player']
    this.render()
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()))
  }

})
