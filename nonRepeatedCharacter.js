// Given an arbitrary input string, return the first non-repeating character. For strings with all repeats, return 'sorry'.

// Examples
// Input	Output
// string:
// "ABCDBIRDUP"	"A"
// string:
// "XXXXXXX"	"sorry"
// string:
// "ALAMABA"	"L"
// string:
// "BABA"	"sorry"

function firstNonRepeatedCharacter (string) {
  var results = {};
  
  for (var i = 0; i < string.length; i++) {
    if (results[string.charAt(i)]) {
      results[string.charAt(i)]++;
    } else {
      results[string.charAt(i)] = 1;
    }
  }
  for (var j = 0; j < string.length; j++) {
    if (results[string.charAt(j)] === 1) {
      return string.charAt(j);
    }
  }
  return "sorry";
}