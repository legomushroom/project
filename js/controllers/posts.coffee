Project.PostsController = Ember.ArrayController.extend
  actions:
    createPost:(text)->
      text = text.trim()
      return if !text.length
      post = @store.createRecord 'post',
        title: 'learn'
        text: text
        isShared: false
      @set 'newTitle', ''
      post.save()

    clearShared:->
      shared = @filterBy 'isShared', true
      shared.invoke 'deleteRecord'
      shared.invoke 'save'
  
  hasShared: (-> 
    @get('shared') > 0
  ).property('shared')

  shared: (->
    @filterBy('isShared', true).get 'length'
  ).property('@each.isShared')

  remaining:(->
    @filterBy('isShared', true).get('length')
  ).property('@each.isShared'),

  inflection:(->
    remaining = @get('remaining')
    if remaining is 1 then 'post' else 'posts'
  ).property('remaining')
      

