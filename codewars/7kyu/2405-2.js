var calculate = function calculate(a = 0, o, b = 0) {
  if (o === "+") {
    return a + b;
  } else if (o === "-") {
    return a - b;
  }
  if (o === "/") {
    if (b === 0) {
      return null;
    }
    return a / b;
  }
  if (o === "*") {
    return a * b;
  }

  return null;
};
