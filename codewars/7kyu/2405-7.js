function multi(arr) {
  return arr.reduce(
    (accumulator, currentValue) => (accumulator *= currentValue),
    1,
  );
}
function add(arr) {
  return arr.reduce((acc, curr) => (acc += curr), 0);
}
function reverse(str) {
  return [...str].reverse().join("");
}

// concept : str.reverse() is not a funcitokn in js
