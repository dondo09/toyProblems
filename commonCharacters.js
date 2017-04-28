// Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings.

// Your function should return the common characters in the same order that they appear in the first argument. Do not return duplicate characters and ignore whitespace in your returned string.

// Example: commonCharacters('acexivou', 'aegihobu')

// Returns: 'aeiou'

commonCharacters = (string1, string2) => {
  var results = [];
  var str1Arr = string1.split('');
  var str2Arr = string2.split('');

  for(var i = 0; i < str1Arr.length; i++) {
    if(str2Arr.indexOf(str1Arr[i]) !== -1 &&
      results.indexOf(str1Arr[i]) === -1 &&
      str1Arr[i] !== ' ') {
      results.push(str1Arr[i]);
    }
  }

  return results.join('');
}