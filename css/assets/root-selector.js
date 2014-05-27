utils = require('../../node_modules/gulp-stylus/node_modules/stylus/lib/utils')

var plugin = function(){
    return function(style){
        style.define('root-selector', function() {
          return this.selectorStack.slice(0,1).toString();
        });

        style.define('rewind-selector', function(i) {
          var stack = this.selectorStack;
          len = stack.length
          i = parseInt(i, 10);
          if (i == null || !i) i = 1;
          i = i < 0 ? -i : i;
          i = i >= len ? len - 1 : i;
          stack = stack.slice(0,len-i);
          return utils.compileSelectors(stack);
        });
  
    };  
};
module.exports = plugin;

