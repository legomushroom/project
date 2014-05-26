(function() {
  Project.PostsController = Ember.ArrayController.extend({
    actions: {
      createPost: function(text) {
        var post;
        text = text.trim();
        if (!text.length) {
          return;
        }
        post = this.store.createRecord('post', {
          title: 'learn',
          text: text,
          isShared: false
        });
        this.set('newTitle', '');
        return post.save();
      },
      clearShared: function() {
        var shared;
        shared = this.filterBy('isShared', true);
        shared.invoke('deleteRecord');
        return shared.invoke('save');
      }
    },
    hasShared: (function() {
      return this.get('shared') > 0;
    }).property('shared'),
    shared: (function() {
      return this.filterBy('isShared', true).get('length');
    }).property('@each.isShared'),
    remaining: (function() {
      return this.filterBy('isShared', true).get('length');
    }).property('@each.isShared'),
    inflection: (function() {
      var remaining;
      remaining = this.get('remaining');
      if (remaining === 1) {
        return 'post';
      } else {
        return 'posts';
      }
    }).property('remaining')
  });

}).call(this);
