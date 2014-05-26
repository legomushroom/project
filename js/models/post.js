(function() {
  Project.Post = DS.Model.extend({
    title: DS.attr('string'),
    text: DS.attr('string'),
    isShared: DS.attr('boolean')
  });

  Project.Post.FIXTURES = [
    {
      id: 1,
      title: 'Learn Ember.js',
      text: 'this is text of the post',
      isShared: true
    }, {
      id: 2,
      title: 'Learn Handlebars.js',
      text: 'this is text of the post',
      isShared: false
    }, {
      id: 3,
      title: 'Learn EmberData.js',
      text: 'this is text of the post',
      isShared: true
    }
  ];

}).call(this);
