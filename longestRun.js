// Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run. 
// If there are two runs of equal length, return the first one. Return [0,0] for no runs.

// Examples
// Input Output
// string:
// "abbbcc"  [ 1, 3 ]
// string:
// "aabbc" [ 0, 1 ]
// string:
// ""  [ 0, 0 ]
// string:
// "mississippi" [ 2, 3 ]
// string:
// "abcdefgh"  [ 0, 0 ]
// string:
// "abccccccc" [ 2, 8 ]

function longestRun (string) {
  if (!string.length) return[0, 0];
  var index = 0;
  var high = 0;
  var count = 0;
  var start = 0;
  
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== string[i - 1]) {
      count = 1;
      start = 1;
    } else {
      count++;
    }
    if (count > high) {
      high = count;
      index = start;
    }
  }
  return [index, index + high - 1];
}
