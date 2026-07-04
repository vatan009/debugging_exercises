// I want my dog to bark(), but instead, I get an error. Why?

function Dog(name) {
  this.name = name;
}
Dog.bark = function () {
  console.log(this.name + " says woof");
};
let fido = new Dog("fido");
fido.bark();
