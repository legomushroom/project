
compileSelectors = function(arr, leaveHidden){
  var self = this
    , selectors = []
    , buf = []
    , hiddenSelectorRegexp = /^\s*\/?\$/;

  function interpolateParent(selector, buf) {
    var str = selector.val.replace(/^\//g, '').trim();
    if (buf.length) {
      for (var i = 0, len = buf.length; i < len; ++i) {
        if (~buf[i].indexOf('&') || '/' === buf[i].charAt(0)) {
          str = buf[i].replace(/&/g, str).replace(/^\//g, '').trim();
        } else {
          str += ' ' + buf[i].trim();
        }
      }
    }
    return str.trim();
  }

  function compile(arr, i) {
    if (i) {
      arr[i].forEach(function(selector){
        if (!leaveHidden && selector.val.match(hiddenSelectorRegexp)) return;
        if (selector.inherits) {
          buf.unshift(selector.val);
          compile(arr, i - 1);
          buf.shift();
        } else {
          selectors.push(interpolateParent(selector, buf));
        }
      });
    } else {
      arr[0].forEach(function(selector){
        if (!leaveHidden && selector.val.match(hiddenSelectorRegexp)) return;
        var str = interpolateParent(selector, buf);
        if (~str.indexOf('&')) str = str.replace(/&/g, '').trim();
        if (!str.length) return;
        selectors.push((self.indent || '') + str.trimRight());
      });
    }
  }

  compile(arr, arr.length - 1);

  // Return the list with unique selectors only
  return selectors.filter(function(value, index, self){
    return self.indexOf(value) === index;
  });
};



var plugin = function(){
    return function(style){
        style.define('root-selector', function() {
          return this.selectorStack.slice(0,1).toString();
        });

        style.define('rewind-selector', function(i) {
          var stack = this.selectorStack,
              len   = stack.length, i;
          // parse int from i in case of '1a'
          // string was specified
          i = parseInt(i, 10);
          // if i is undefined/NaN or 0
          // then set i to 1
          // i = (!i) ? 1 : i;
          (!i) && (i = 1);

          // if i < 0 then change sign
          // takes care of negative i
          // if somebody will define rewind-selector(-2)
          // i = i < 0 ? -i : i;
          (i < 0) && (i = -i);
          // if i is too big, return root(the last available) selector
          i = i >= len ? len - 1 : i;
          // slice selector stack to
          // get current selector
          stack = stack.slice(0,len-i);
          // return comiled current selector
          return compileSelectors(stack);
        });

        style.define('last-selector', function() {
          var len = this.selectorStack.length;
          var selector = compileSelectors(this.selectorStack);
          selector = selector.toString().split(' ');
          return selector[selector.length-1];
          // return this.selectorStack.slice(len-1,len).toString();
        });
    };  
};
module.exports = plugin;

