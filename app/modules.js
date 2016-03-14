exports = (typeof window === 'undefined') ? global : window;

exports.modulesAnswers = {
  createModule : function(str1, str2) {

    this.greeting = str1;
    this.name = str2;

    return {
      name: this.name,
      greeting: this.greeting,
      sayIt: function() {
        return this.greeting + ', ' + this.name;
      },
    };
  }
};
