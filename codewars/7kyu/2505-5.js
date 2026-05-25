function isTotal3() {
  var simpleVariable = 1;

  for (var index = 0; index < 1; index++) {
    var variableInLoop = 1;
  }
  let variableInFunction = (function defineAVariable() {
    var variableInFunction = 1;
    return variableInFunction;
  })();

  var result = simpleVariable + variableInLoop + variableInFunction;

  return result;
}

// concept : var is scoped around its function not based on loop,conditions
//            var declarations are hoisted at the top of their respective function
