function yourFutureCareer() {
  var career = Math.random();
  if (career <= 0.32) {
    return "FrontEnd Developer";
  } else if (career <= 0.65) {
    return "BackEnd Developer";
  } else {
    return "Full-Stack Developer";
  }
}

yourFutureCareer();
// concept : Math.random() gives [0,1] values,
//  some theory  : var vs let, temporal dead zone

// Scope: var variables are accessible anywhere within their enclosing function.  let variables are restricted to the block (such as if, for, or while statements) in which they are declared.
// Hoisting: Both are hoisted to the top of their scope, but var is initialized with undefined, allowing access before declaration (returning undefined).  let is hoisted but remains in a Temporal Dead Zone until the code execution reaches the declaration; accessing it earlier throws a ReferenceError.
// Redeclaration: var allows re-declaration of the same variable within the same scope.  let does not allow re-declaration of the same variable within the same scope, though it allows reassignment.
// Global Object: var declared at the top level creates a property on the global object (e.g., window).  let declared at the top level does not attach to the global object.
