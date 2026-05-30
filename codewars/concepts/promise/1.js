function getUser() {
  setTimeout((() => { return "vatan" }), 1000)
  setTimeout(()=>console.log('pawar',new Date().getSeconds()),2000)
}
console.log("a", new Date().getSeconds());
console.log(getUser(), new Date().getSeconds());
console.log("b", new Date().getSeconds());
