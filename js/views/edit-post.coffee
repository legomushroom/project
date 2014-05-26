Project.EditPostView = Ember.TextField.extend
	didInsertElement: ->
		@$().focus()

Ember.Handlebars.helper 'edit-post', Project.EditPostView