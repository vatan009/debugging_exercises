let name = "Abe";

const greetAbe = ((c) => {
  return () => "Hello, " + c + "!";
})(name);

name = "Ben";

const greetBen = ((c) => {
  return () => "Hello, " + c + "!";
})(name);

// concept : iffy
// Standard syntax
// (function() {
//     // code to be executed
// })();

// // Arrow function syntax
// (() => {
//     // code to be executed
// })();

// // With arguments
// (function(name) {
//     console.log('Hello, ' + name);
// })('Abe');
