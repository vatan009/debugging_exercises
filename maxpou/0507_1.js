// I want this code to log out “hey amy”, but it logs out “hey arnold” - why?


function greet(person) {
  if (person == { name: "amy" }) {
    return "hey amy";
  } else {
    return "hey arnold";
  }
}
greet({ name: "amy" });
