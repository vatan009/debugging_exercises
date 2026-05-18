function arrayPlusArray(arr1, arr2) {
  let sum = 0;
  //   arr1.forEach((e)=>sum+=e);arr2.forEach((e)=>sum+=e);
  // [...arr1,...arr2].forEach(e=>sum+=e);
  return [...arr1, ...arr2].reduce((sum, n) => sum + n, 0);

  return sum; //something went wrong
  //   concept : (arr1+arr2).forEach is invalid operation -> it converts [1,3][4,5] -> "1,34,5"
  //   concept : reduce function gives single value as in return
  //            : syntac : const sum = arr.redunce((finalSum,currentEle)=>finalSum+=currentElement,initial value)
}
