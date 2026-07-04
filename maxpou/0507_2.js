// I want this code to log out the numbers 0, 1, 2, 3 in that order, but it doesn’t do what I expect (this is a bug you run into once in a while, and some people love to ask about it in interviews).


for (var i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0);
}
