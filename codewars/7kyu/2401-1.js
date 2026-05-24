class Dinglemouse {
  constructor(firstName = undefined, lastName = undefined) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    if (this.firstName && this.lastName) {
      return this.firstName + " " + this.lastName;
    } else if (this.firstName) {
      return this.firstName;
    } else if (this.lastName) {
      return this.lastName;
    }
    return "";
  }
}

// concept : think about what if perams passed is null or undefiuned
