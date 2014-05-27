var plugin = function(){
    return function(style){
        var nodes = this.nodes, i,
            l, len, newSelector, newSelectors,
            regex, selector, _i;
        // var args = arguments;
        style.define('root-selector', function() {
          return 'args';
        });
  
    };
};
module.exports = plugin;



