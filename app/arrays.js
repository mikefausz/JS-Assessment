exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return _.reduce(arr, function(acc, x) {return acc + x}, 0);
  },

  remove : function(arr, item) {
    return _.filter(arr, function(x) { return x !== item });
  },

  removeWithoutCopy : function(arr, item) {
    return _.each(arr, function(x, idx) { if(x === item) {arr.splice(idx, idx + 1)} });
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    return _.reduce(arr, function(acc, x){ if(x === item) {acc++} return acc}, 0);
  },

  duplicates : function(arr) {
    var dupArr = [];
    _.each(arr, function(x, idx) {
      for(var i = idx + 1; i < arr.length; i++) {
        if(arr[i] === x && !dupArr.includes(x)) {
          dupArr.push(x);
        }
      }
    });
    return dupArr;
  },

  square : function(arr) {
    return _.map(arr, function(x){ return x * x });
  },

  findAllOccurrences : function(arr, target) {
    return _.reduce(arr, function(idxArr, x, idx){ if(x === target) {idxArr.push(idx)} return idxArr}, []);
  }
};
