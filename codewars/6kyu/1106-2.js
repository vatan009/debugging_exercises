function NamedOne(first, last) {
  // -- SHOULD be changed --
  this.firstName = first;
  this.lastName = last;
  this.fullName = this.firstName + " " + this.lastName;


}
function firstName(firstName) {
  this.firstName = firstName;
  this.fullName = this.firstName + " " + this.lastName;
};

  function lastName(lastName) {
    this.lastName = lastName;
    this.fullName = this.firstName + " " +lastName;
  }
  console.log(this.fullName)
