let filterNumbers = function (str) {
  //   return str.split('').filter(c => !(c.charCodeAt(0)>='0'.charCodeAt(0)&&c.charCodeAt(0)<='9'.charCodeAt(0))).join('');
  return str
    .split("")
    .filter((c) => isNaN(parseInt(c)))
    .join("");
};
// concept : parseInt('a')  gives NaN
// we cannot compare === NaN because NaN by definintion is a not anything
// so we can use !isNaN()
