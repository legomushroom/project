window.Project = Ember.Application.create()


Project.ApplicationAdapter = DS.FixtureAdapter.extend()

Ember.Handlebars.helper 'esc', (value, options)->
  new Ember.Handlebars.SafeString value

# selector = ".foo--bar__cez .as:hover  a * [readonly*='a'] | html ~ sss > red a[srrs^=''] a[srrs-$='']:not(.aaa__dsd:hover)::first-letter() + sddda [srrs-$='a--a']"
# selector ?= ''

# regex = /\s?((?:\.|\#|::?|__|--|\s|\|\s?|\~\s?|\>\s?|\+\s?)((?:[a-z*\\=\'\"\!\$\^\d]|\-(?!\-))+)|(\[(.+?)\]))(\((.+?)?\))?/gi

# console.time 'split'
# newSelectors = selector.match regex

# len = newSelectors.length
# newSelector = ''
# i = '-3a'
# i = parseInt i, 10
# i = if i <  0 then -i else i
# i = if i is 0 then 1 else i
# i = if i >= len then len-1 else i

# l = len-i
# for i in [0...l]
#   newSelector += newSelectors[i]
# console.timeEnd 'split'

# console.log selector
# console.log newSelector

# # \s?((?:\.|\#|::?|__|--|\s|\|\s?|\~\s?|\>\s?|\+\s?)((?:[a-z*\\=\'\"\!\$\^\d]|\-(?!\-))+)|(\[(.+?)\]))(\((.+?)?\))?