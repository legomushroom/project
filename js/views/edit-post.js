(function() {
  Project.EditPostView = Ember.TextField.extend({
    didInsertElement: function() {
      return this.$().focus();
    }
  });

  Ember.Handlebars.helper('edit-post', Project.EditPostView);

}).call(this);
