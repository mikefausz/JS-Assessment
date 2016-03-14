exports = (typeof window === 'undefined') ? global : window;

exports.logicalOperatorsAnswers = {
  or : function(a, b) {
    if(a) {
      return true;
    } else if (b) {
      return true;
    } else {
      return false;
    }
  },

  and : function(a, b) {
    if (a) {
      if (b) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
};
