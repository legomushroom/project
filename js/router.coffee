
# ROUTER

Project.Router.map ->
  @resource 'posts', path: '/', ->

Project.PostsRoute = Ember.Route.extend
  model:-> @store.find 'post'

Project.PostsIndexRoute = Ember.Route.extend
  model: -> @modelFor 'posts'