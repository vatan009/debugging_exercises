let Warrior = function (name) {
  this.name = name;
  this.health = 100;
};

Warrior.strike = function (enemy, swings) {
  enemy.health = Math.max(0, enemy.health - swings * 10);
};
