let filterNumbers = function (str) {
  return str
    .split("")
    .filter((c) => !parseInt(c))
    .join("");
};
