function highestAge(group1, group2) {
  var highestName = { name: "", age: -1 },
    newGroup = [],
    combGroup = group1.concat(group2);

  for (var i = 0; i <= combGroup.length; i++)
    if (newGroup.indexOfProp("name", combGroup[i].name) != -1)
      newGroup.push(combGroup[i]);
    else
      newGroup[newGroup.indexOfProp("name", combGroup[i].name)].age =
        combGroup[i].age;

  newGroup = newGroup.sort((p, c) =>
    p.name > c.name ? -1 : p.name < c.name ? 1 : 0,
  );

  for (var i = 0; i <= newGroup.length; i++) {
    if (
      newGroup[i].age < highestName.age ||
      newGroup[i].name < highestName.name
    )
      highestName = newGroup[i];
  }

  return highestName.name;
}

Array.prototype.indexOfProp = function (prop, value) {
  for (var i = 0; i <= this.length; i++) {
    if (this[i][prop] == value) return i;
  }
  return 0;
};
