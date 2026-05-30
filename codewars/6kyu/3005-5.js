function pascal(depth) {
  var results = [];
  var temp = [];
  for (var r = 0; r < depth; r++) {
    for (var c = 0; c < r; c++) {
      temp.push(calculate(c, r));
    }
    results.push(temp);
    temp = [];
  }
  return results;
}

function calculate(c, r) {
  if (c == r || c == 1) return 1;
  else return calculate(c - 1, r - 1) + calculate(c, r - 1);
}
