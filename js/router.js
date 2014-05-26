(function() {
  Project.Router.map(function() {
    return this.resource('posts', {
      path: '/'
    }, function() {
      this.route('active');
      return this.route('shared');
    });
  });

  Project.PostsActiveRoute = Ember.Route.extend({
    model: function() {
      return this.store.filter('post', function(post) {
        return !post.get('isShared');
      });
    },
    renderTemplate: function(controller) {
      return this.render('posts/index', {
        controller: controller
      });
    }
  });

  Project.PostsSharedRoute = Ember.Route.extend({
    model: function() {
      return this.store.filter('post', function(post) {
        return post.get('isShared');
      });
    },
    renderTemplate: function(controller) {
      return this.render('posts/index', {
        controller: controller
      });
    }
  });

  Project.PostsRoute = Ember.Route.extend({
    model: function() {
      return this.store.find('post');
    }
  });

  Project.PostsIndexRoute = Ember.Route.extend({
    model: function() {
      return this.modelFor('posts');
    }
  });

}).call(this);
