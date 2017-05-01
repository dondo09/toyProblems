function mergeSort(arr) {
  if (arr.length < 2) return arr;
  
  var mid = Math.floor(arr.length/2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid);
  var result = [];
  
  if (left.length > 1) {
    left = mergeSort(left);
  }
  if (right.length > 1) {
    right = mergeSort(right);
  }
  
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  if (left.length) {
    result = result.concat(left);
  }
  if (right.length) {
    result = result.concat(right);
  }
  return result;
};