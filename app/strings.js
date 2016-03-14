exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var newStr = '';
    var charCount = 1;
    for(var i = 0; i < str.length; i++){
      if (str.charAt(i - 1)) { // IF there is previous char
        if(str.charAt(i - 1) === str.charAt(i)) { // prev SAME as curr char
          charCount++; // increment counter
          if(charCount <= amount) { // IF within duplicate limit
            newStr += str.charAt(i); // add char to string
          }
        }
        else {  // prev NOT SAME as curr char
          newStr += str.charAt(i); // add char to string
          charCount = 1; //reset counter
        }
      }
      else {  // first char
        newStr += str.charAt(i); // add char to string
      }
    }
    return newStr;
    // RECURSIVE REMOVES ALL DUPLICATES
    // var dups = 0;
    // if (str.length < 2) {
    //   return str;
    // }
    // else if (str.charAt(0) === str.charAt(1)){
    //   return this.reduceString(str.substring(1));
    // }
    // else {
    //   return str.charAt(0) + this.reduceString(str.substring(1));
    // }
  },

  wordWrap: function(str, cols) {
    var splitStr = str.split(' ');
    var wrapStr = '';
    for (var i = 0; i < splitStr.length; i++) {
      if (i === splitStr.length - 1) {
        wrapStr += splitStr[i];
      }
      else if (splitStr[i].length + 1 + splitStr[i + 1].length <= cols) {
        if (i + 1 === splitStr.length - 1) {
          wrapStr += splitStr[i] + ' ' + splitStr[i + 1] + '\n';
          i++;
        }
        else if (splitStr[i].length + 1 + splitStr[i + 1].length + 1 + splitStr[i + 2].length <= cols) {
          wrapStr += splitStr[i] + ' ' + splitStr[i + 1] + ' ' + splitStr[i + 2] + '\n';
          i += 2;
        }
        else {
          wrapStr += splitStr[i] + ' ' + splitStr[i + 1] + '\n';
          i++;
        }
      }
      else {
        wrapStr += splitStr[i] + '\n';
      }
    }
    return wrapStr;
  },

  reverseString: function(str) {
    // ITERATIVE
    // var reverse = '';
    // for(var i = str.length - 1; i >= 0; i--){
    //   reverse += str.charAt(i);
    // }
    // return reverse;

    //RECURSIVE
    if (str.length < 2){
      return str;
    } else {
      return this.reverseString(str.substring(1)) + str.charAt(0);
    }
  }
};
