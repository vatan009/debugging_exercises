function facRecursion(value) {
  if (value < 0) return 0;
  if (value === 1 || value === 0) {
    return 1;
  }
  return value * facRecursion(value - 1);
}
//  = : assignmendt
// == : loose equality
// === : strci
// let mpp=new Map() ; mpp.set(2,'22') ; mpp.get(2)->'22';mpp.get(1)->undefined
