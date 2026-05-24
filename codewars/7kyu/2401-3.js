function Character(name, opness) {
  this.name = name;
  this.opness = 20;
  this.attack = opness + ~~(Math.random() * 20) + 1;
}
