exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    if(!data.files) {
      return ;
    } else {
      return this.listFiles(data.files) ;
    }

    // var that = this
    // var fileList = [];
    // _.each(data.files, function(file) {
    //   if(typeof file === 'string') {
    //     fileList.push(file);
    //   } else {
    //     that.listFiles(file);
    //   }
    // });
    // return fileList;
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {
    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    }
  },

  validParentheses: function(n) {

  }
};
