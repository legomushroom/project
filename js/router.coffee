
# ROUTER

Project.Router.map ->
  @resource 'posts', path: '/', ->
    @route 'active'
    @route 'shared'

Project.PostsActiveRoute = Ember.Route.extend
  model:->
    @store.filter 'post', (post)-> !post.get 'isShared'
  renderTemplate:(controller)->
    @render 'posts/index', controller: controller

Project.PostsSharedRoute = Ember.Route.extend
  model:->
    @store.filter 'post', (post)-> post.get 'isShared'
  renderTemplate:(controller)->
    @render 'posts/index', controller: controller

Project.PostsRoute = Ember.Route.extend
  model:-> @store.find 'post'

Project.PostsIndexRoute = Ember.Route.extend
  model:-> @modelFor 'posts'