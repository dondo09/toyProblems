// 3/4/16 UPDATE: If you solved this challenge previously, you may have to update your function name from evenOccurence (with 1 r) to evenOccurrence (with 2 rs)


// Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

// arr:
// [ 1, 3, 3, 3, 2, 4, 4, 2, 5 ] 2
// arr:
// [ "cat", "dog", "dig", "cat" ]  "cat"

function evenOccurrence (arr) {
for(var i = 0; i <= arr.length; i++){
    var count = 0;
    var current = arr[i];
    for(var j = i; j <= arr.length; j++){
      if(arr[j] === current){
        count+=1;
      }
    }
    if (count % 2 === 0 && arr.indexOf(current) === i){
      return current;
    }
  }
  return null;
};