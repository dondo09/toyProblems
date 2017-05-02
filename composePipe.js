// Compose
// Compose should return a function that is the composition of a list of functions of arbitrary length. Each function is called on the return value of the function that follows.

// You can think of compose as moving right to left through its arguments.

// Pipe:
// Pipe composes a series of functions and returns the resulting function. Each function is called on the return value of the preceding function.

// You can think of pipe as moving left to right through its arguments.

var compose = function(){
  var args = Array.prototype.slice.call(arguments)
  return function(val) {
    for (var i = args.length - 1; i >= 0; i--) {
      val = args[i](val);
    }
    return val;
  };
};

var pipe = function(){
  var args = Array.prototype.slice.call(arguments)
  return function(value) {
    for (var i = 0; i < args.length; i++) {
      value = args[i](value);
    }
    return value;
  };
};
