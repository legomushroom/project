var plugin = function(){
    return function(style){
        style.define('root-selector', function() {
          return this.selectorStack.slice(0,1).toString();
        });
  
    };	
};
module.exports = plugin;



