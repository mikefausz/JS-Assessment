exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(str2) {
      return str + ', ' + str2;
    };
  },

  makeClosures : function(arr, fn) {
    var closures = [];
    _.each(arr, function(x) {
      closures.push(function() {
        return fn(x);
      });
    });
    return closures;
  },

  partial : function(fn, str1, str2) {
    return function(x) { return fn(str1, str2, x); };
  },

  useArguments : function() {
    return _.reduce(arguments, function(acc, x){ return acc += x; }, 0);
  },

  callIt : function(fn) {
    return fn.apply(this, [].slice.call(arguments, 1));
  },

  partialUsingArguments : function(fn) {
    var firstArgs = [].splice.call(arguments, 1);
    function secondFunction() {
      var secondArgs = [].slice.call(arguments);
      var finalArgs = firstArgs.concat(secondArgs);
      return fn.apply(null, finalArgs);
    }
    return secondFunction;
  },

  curryIt : function(fn) {
    return function(x) {
      return function(y) {
        return function(z) {
          return fn(x, y, z);
        };
      };
    };
  },
};
