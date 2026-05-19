function evalObject(value) {
  var result = 0;
  console.log(value);
  console.log(typeof value.a);
  switch (value.operation) {
    case "+":
      result = value.a + value.b;
      break;
    case "-":
      result = value.a - value.b;
      break;
    case "/":
      result = value.a / value.b;
      break;
    case "*":
      result = value.a * value.b;
      break;
    case "%":
      result = value.a % value.b;
      break;
    case "^":
      result = Math.pow(value.a, value.b);
  }
  return (result);
}
// concept : switch case synntsx :
// switch(type)
//{case type1:
// some code
// break;}
// concept2 : parseInt(1.667) =>1
