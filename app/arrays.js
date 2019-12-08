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
    return arr.filter(function(number) {
      return item !== number;
    });
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    return arr.filter(function(number) {
      return item === number;
    }).length;
  },

  duplicates: function(arr) {
    return arr.reduce(function(acc, number, index) {

    }, []);
  },

  square: function(arr) {
    return arr.map(function(number) {
      return number ** 2;
    });
  },

  findAllOccurrences: function(arr, target) {

  }
};
