exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    for(var i = 8; i >= bit; i--){
      if (num / Math.pow(2, i - 1) >= 1) {
        if (i === bit) {
          return 1;
        } else {
          num %= Math.pow(2, i - 1);
        }
      }
    }
    return 0;
  },

  base10: function(str) {
    var baseTen = 0;
    for(var i = str.length, j = 0; i > 0; i--, j++) {
      baseTen += parseInt(str.charAt(i - 1) * Math.pow(2, j));
    }
    return baseTen;
  },

  convertToBinary: function(num) {
    var str = '';
    for(var i = 7; i >= 0; i--) {
      if (num / Math.pow(2, i) >= 1) {
        str += '1';
        num = num % Math.pow(2, i);
      } else {
        str += '0';
      }
    }
    return str;
  },

  multiply: function(a, b) {
    function precision(x) {
      x = x + '';
      if (x.indexOf('.') === -1) {
        return x.length;
      } else {
        return x.split('.')[1].length;
      }
    }
    var prec = precision(a) > precision(b) ? precision(a) : precision(b);
    return parseFloat((a * b).toPrecision(prec));
  }
};
