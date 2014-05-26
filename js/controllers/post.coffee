Project.PostController = Ember.ObjectController.extend
  actions:
    editPost:-> @set 'isEditing', true

    acceptChanges: ->
      @set 'isEditing', false

      if Ember.isEmpty @get('model.title')
        @send('removePost');
      else @get('model').save()

    removePost: ->
      post = @get('model')
      post.deleteRecord()
      post.save()

  isEditing: false

  isShared: ((key, value)->
    model = @get 'model'
    if !value?
      return model.get 'isShared'
    else
      model.set 'isShared', value
      model.save()
      return value
  ).property('model.isShared')