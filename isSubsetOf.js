// Make an array method that can return whether or not a context array is a subset of an input array. To simplify the problem, you can assume that both arrays will contain only strings.

Array.prototype.isSubsetOf = function(arr) {
  var result = true;
  for(var i =0; i < this.length; i++) {
    if (arr.indexOf(this[i]) === -1) {
      result = false;
    }
  }
  return result;
};
