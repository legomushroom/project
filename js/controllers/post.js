(function() {
  Project.PostController = Ember.ObjectController.extend({
    actions: {
      editPost: function() {
        return this.set('isEditing', true);
      },
      acceptChanges: function() {
        this.set('isEditing', false);
        if (Ember.isEmpty(this.get('model.title'))) {
          return this.send('removePost');
        } else {
          return this.get('model').save();
        }
      },
      removePost: function() {
        var post;
        post = this.get('model');
        post.deleteRecord();
        return post.save();
      }
    },
    isEditing: false,
    isShared: (function(key, value) {
      var model;
      model = this.get('model');
      if (value == null) {
        return model.get('isShared');
      } else {
        model.set('isShared', value);
        model.save();
        return value;
      }
    }).property('model.isShared')
  });

}).call(this);
