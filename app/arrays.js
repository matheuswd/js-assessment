exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce((acc, item) => acc + item);
  },

  remove: function(arr, item) {
    //you should be able to remove all instances of a value from an array
    var filtered = arr.filter((item2) => item2 !== item);
    return filtered;
  },

  removeWithoutCopy: function(arr, item) {

  },

  append: function(arr, item) {
    return arr.push(item);
  },

  truncate: function(arr) {

  },

  prepend: function(arr, item) {

  },

  curtail: function(arr) {

  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
