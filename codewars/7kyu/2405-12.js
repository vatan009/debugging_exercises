function getSumOfDigits(integer) {
  var sum = 0;
  var digits =  Math.floor(integer).toString();
  console.log(...digits)
  for(var ix = 0; ix < [...digits].length; ix = ix + 1) {
    sum += ~~([...digits][ix]);
    console.log(sum)
  }
  return sum;
}
