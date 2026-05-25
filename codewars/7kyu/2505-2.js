class Class {
  static #foo = 42;

  static get foo() {
    return Class.#foo;
  }
}

// concept : in js private is defined by #
//           Class.#foo
