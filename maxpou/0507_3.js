// I want this code to log out “doggo”, but it logs out undefined!


let dog = {
  name: "doggo",
  sayName() {
    console.log(this.name);
  },
};
let sayName = dog.sayName;
sayName();
