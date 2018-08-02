module.exports = function arrayMap(arr, fn) {

    return arr.reduce((acc, item) => [...acc, fn(item)], []);
  }