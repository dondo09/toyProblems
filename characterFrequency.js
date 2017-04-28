// Write a function that takes as its input a string and returns an array of arrays as shown below sorted in descending order by frequency and then by ascending order by character.

// string:
// "aaabbc"	[ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]
// string:
// "mississippi"	[ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]
// string:
// ""	[ ]

function characterFrequency (string) {
  var results = [];
  var split = string.split('');
  var count = {};
  
  split.forEach(function(char) {
    char = char.toString();
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  });
  for (char in count) {
    results.push([char, count[char]]);
  }
  
  return results.sort(function (x, y) {
    if (x[1] < y[1]) {
      return 1;
    } else if (x[1] > y[1]) {
      return -1;
    } else if (x[0] > y[0]) {
      return 1;
    } else {
      return -1;
    }
  });
}