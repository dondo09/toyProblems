function calculate (inputs) {
  var values = [];
  var nums = inputs.split(' ');
  
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === '+'){
      values.push(Number(values.pop()) + Number(values.pop()));
    } else if (nums[i] === '-') {
      values.push(values.pop() - values.pop());
    } else if (nums[i] === '*') {
      values.push(values.pop() * values.pop());
    } else if (nums[i] === '/') {
      var first = values.pop();
      var second = values.pop();
      values.push(second / first);
    } else {
      values.push(nums[i]);
    }
  }
  return values[0];
}