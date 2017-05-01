// Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.

// Examples
// Input Output
// array:
// [ [ 5 ], [ [ ] ] ]  2
// array:
// [ 10, 20, 30, 40 ]  1
// array:
// [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ]  4
// array:
// [ ] 0
// array:
// [ [ [ ] ] ] 0

function arrayception (array) {
  var depth = 0;

  function search(arr, values) {
    if (arr.length === 0) {
      return 0;
    }
    for (var i = 0; i < arr.length; i++) {
      if(!Array.isArray(arr[i]) && values > depth) {
        depth = values;
      } else {
        search(arr[i], values + 1);
      }
    }
  }
  search(array, 1);
  return depth;
}