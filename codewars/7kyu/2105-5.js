function objectType(obj) {
  //if no arguments are passed, defaults to null
  //   console.log(arguments);
  if (arguments.length === 0) {
    return "[object Null]";
  }
  let temp = Object.prototype.toString.call(obj);
  //   console.log(temp.slice(7));
  return temp;
}
// concepts: arguments is the array which we can access in  function
//object.prototype.toString.call(obj) : most reliable method to identify type in string
