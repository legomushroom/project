(function() {
  window.Project = Ember.Application.create();

  Project.ApplicationAdapter = DS.FixtureAdapter.extend();

  Ember.Handlebars.helper('esc', function(value, options) {
    return new Ember.Handlebars.SafeString(value);
  });

}).call(this);
