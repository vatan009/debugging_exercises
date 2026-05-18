function swapValues() {
  var args = Array.prototype.slice.call(arguments);
  console.log(args);
  let temp = args[0][0];
  args[0][0] = args[0][1];
  args[0][1] = temp;
  //concept : array.prototype.slice.call(argumnet) converts arguments into a array so that we can use map,filter
}
