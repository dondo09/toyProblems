// Given a string, return true if it contains all balanced parenthesis (), curly-brackets {}, and square-brackets [].

// Examples
// Input Output
// str:
// "(x + y) - (4)" true
// str:
// "(x + y) - (4)" true
// str:
// "(((10 ) ()) ((?)(:)))" true
// str:
// "[{()}]"  true
// str:
// "(50)(" false
// str:
// "[{]}"  false

function isBalanced (str) {
  var stack = [];
  var opened = { '{': '}', '[': ']', '(': ')'};
  var closed = { '}': true, ']': true, ')': true};
  
  for (var i = 0; i < str.length; i++) {
    if (opened[str[i]]) {
      stack.push(str[i]);
    } else if (closed[str[i]]) {
      if (opened[stack.pop()] !== str[i]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}