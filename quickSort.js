function quickSort(arr) {
  
  if (arr.length === 0) {
    return [];
  }
  
  var low = [];
  var high = [];
  var pivot = arr[0];
  
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      low.push(arr[i]);
    } else {
      high.push(arr[i]);
    }
  }
   return quickSort(low).concat(pivot, quickSort(high));
}