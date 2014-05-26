
# ROUTER

Project.Router.map ->
  @resource 'posts', path: '/'

Project.PostsRoute = Ember.Route.extend
  model:->
    @store.find 'post'