(function() {
  Project.Router.map(function() {
    return this.resource('posts', {
      path: '/'
    }, function() {});
  });

  Project.PostsIndexRoute = Ember.Route.extend({
    model: function() {
      return this.modelFor('posts');
    }
  });

}).call(this);
