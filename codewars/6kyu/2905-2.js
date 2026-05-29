function search(searchTerm) {
  var search = new RegExp(searchTerm, "i");
  console.log(search);

  let temp = TITLES.filter(function (title) {
    return search.test(title);
  });
  console.log(temp);
  return temp;
}
