function deleteValues(array, pred) {
  for (var i = 0; i < array.length; i++) {
    if (pred(array[i])) {
      array.splice(i, 1);
      i--;
    }
  }
  return array;
}
// concept : splice method arr.splice(index start,index end , element to inset,e2,e3)
//  it removes elements from start to end and inserts concequent elements passed at the start position
