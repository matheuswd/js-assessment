exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function (arr, item) {
    return arr.indexOf(item);
  },

  sum: function (arr) {
    return arr.reduce((acc, item) => acc + item);
  },

  remove: function (arr, item) {
    //you should be able to remove all instances of a value from an array
    var filtered = arr.filter((item2) => item2 !== item);
    return filtered;
  },

  removeWithoutCopy: function (arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append: function (arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function (arr) {
    arr.pop();
    return arr;
  },

  prepend: function (arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function (arr) {
    arr.shift();
    return arr;
  },

  concat: function (arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function (arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function (arr, item) {
    return arr.filter(function (number) {
      return item === number;
    }).length;
  },

  duplicates: function (arr) {
    return arr.reduce(function(acc, currentValue, index, array) {
      if (array.indexOf(currentValue) !== index && !acc.includes(currentValue)) {
        acc.push(currentValue);
      }
      return acc;
    }, []);
  },

  square: function (arr) {
    return arr.map((number) => number ** 2);
  },

  findAllOccurrences: function (arr, target) {
    return arr.reduce(function (acc, item, index) {
      if (item === target) {
        acc.push(index);
      }
      return acc;
    }, []);
  }
};
