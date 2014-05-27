(function() {
  Project.Post = DS.Model.extend({
    title: DS.attr('string'),
    text: DS.attr('string'),
    isShared: DS.attr('boolean')
  });

}).call(this);
