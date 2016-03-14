exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var counter;
    (function tick() {
      if (start <= end) {
        console.log(start++);
        counter = setTimeout(tick, 100);
      }
    })();
    return {
      cancel: function() {
        clearTimeout(counter);
      }
    };
  }
};
