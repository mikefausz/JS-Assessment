// This is a bonus section!
exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    return /[0-9]/.test(str);
  },

  containsRepeatingLetter : function(str) {
    return /[a-z]{2,}|[A-Z]{2,}/.test(str);
  },

  endsWithVowel : function(str) {

  },

  captureThreeNumbers : function(str) {

  },

  matchesPattern : function(str) {

  },
  isUSD : function(str) {

  }
};
