// Insertion sort is a basic sorting algorithm.

// Insertion sort iterates over an array, growing a sorted array behind the current location. It takes each element from the input and finds the spot, up to the current point, where that element belongs (in constant space). It does this until it gets to the end of the array.

// Insertion sort should be implemented as a stable sort. This means that equal elements
// should retain their relative order. Numbers, as primitives, give us no way to check this,
// so we’ll be sorting objects with a value field, on which they will be sorted, like so:

// [{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}]

// A stable sort must return {value: 5, order: 1}, {value:5, order: 2} in that order.

function insertionSort (array) {
  var sorted = [];
  for (var i = 0; i < array.length; i++) {
    var found = false;
    for (var j = sorted.length - 1; j >= 0; j--) {
      if (array[i].value === sorted[j].value && !found) {
        if (array[i].order > sorted[j].order) {
          sorted.splice(j + 1, 0, array[i])
        }
        else {
          sorted.splice(j, 0, array[i])
        }
        found = true;
      }
      if (array[i].value > sorted[j].value && !found) {
        sorted.splice(j + 1, 0, array[i])
        found = true;
      }
    }
    if (!found) {
      sorted.unshift(array[i]);
    }
  }
  return sorted;
};