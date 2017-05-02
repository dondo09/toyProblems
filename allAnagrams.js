// Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array. At first, don’t worry about repeated strings. What time complexity is your solution?


// Input	Output
// string:
// "abc"	[ "abc", "acb", "bac", "bca", "cab", "cba" ]

function allAnagrams (string) {
  var str = string.split('');
  var results = [];

  
  function recurse (strArray, result){
    if (strArray.length === 0) { 
      if (results.indexOf(result) < 0 ) {
        results.push(result);
      }
      return; 
    }
  
    for (var i = 0; i < strArray.length; i ++) {
      var char = strArray[i];
      var newResult = result + char;
      var newArray = strArray.slice();
      newArray.splice(i,1);
      recurse(newArray, newResult);
    }
    
  }
  recurse(str, '');
  return results;
}