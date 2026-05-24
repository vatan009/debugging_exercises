name = "The Window";

let alpha = {
  name: "My Alpha",
  getNameFunc: function () {
    const self = this;
    return function () {
      return self.name;
    };
  },
};
// concept :
// Lexical scope : inner function can access the outer function using the this keyword
// Normal Function : this is not bound lexically
// Arrow function : this is bound lexically
