function myFunction() {
  var myObject = {
    objProperty: "string",
    objMethod: function () {
      return this.objProperty;
    },
  };

  return myObject;
}
