function objectType(obj = null) {
  //if no arguments are passed, defaults to null
  return Object.prototype.toString.call(obj);
}
