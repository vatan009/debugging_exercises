class Character {
  constructor(name, opness) {
    this.name = name;
    this.opness = opness;
  }
  name() {
    return this.name;
  }
  attack() {
    return this.opness + ~~(Math.random() * 20) + 1;
  }
}
// concept : ~~('-1.4') -> -1 , ~~(1.545)->1
