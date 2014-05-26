(function() {
  Project.Router.map(function() {
    return this.resource('posts', {
      path: '/'
    });
  });

  Project.PostsRoute = Ember.Route.extend({
    model: function() {
      return this.store.find('post');
    }
  });

}).call(this);
