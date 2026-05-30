import * as a from "acorn";
import * as walk from "acorn-walk";
let code= `
  function greet() {
    console.log("hi");
  }

  greet();
  `

const ast = a.parse(
code ,
  { ecmaVersion: "latest" },
);
console.log(ast)
console.log('walking------------------')
walk.simple(ast, {
  CallExpression(node) {
    console.log(node.callee);
  },
});
console.log(ast);
