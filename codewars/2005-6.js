var replaceDots = function (str) {
  return str.replaceAll(".", "-");
};
// concept : str.replace(regex or text,thing u want to replace with) vs replaceAll

var replaceDots = function (str) {
  // added the \ to escape special characters
  // added the g so that replace is run for all occurences in the string
  return str.replace(/\./g, "-");
};
