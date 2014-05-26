Project.PostsController = Ember.ArrayController.extend
  actions:
    createPost:(text)->
      text = text.trim()
      return if !text.length
      post = @store.createRecord 'post',
        title: 'learn'
        text: text
        isShared: true
      @set 'newTitle', ''
      post.save()

  remaining:(->
    @filterBy('isShared', true).get('length')
  ).property('@each.isShared'),

  inflection:(->
    remaining = @get('remaining')
    if remaining is 1 then 'post' else 'posts'
  ).property('remaining')
      

