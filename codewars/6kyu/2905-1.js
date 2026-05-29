function correctResult(resultOfJohn) {
  let rev = "";
  let t = 0;
  let n = 0;
  for (char of resultOfJohn) {
    //     console.log(char)
    if (char === "J" || char === "o" || char === "h" || char === "n") {
      t++;
    }
  }

  console.log(t);
  resultOfJohn = resultOfJohn.slice(10);
  rev = resultOfJohn;

  let arr = rev.split("  ");
  arr = arr.map((curr) => {
    return curr.split(" ").reverse().join("");
  });
  if (t > 0) {
    arr[arr.length - 1] = arr[arr.length - 1].slice(t / 2 - 1);
    arr.reverse();
  }

  let ans = [];
  let lw = "";
  for (i of arr) {
    let temp = "";
    for (char of i) {
      if (char === "J" || char === "o" || char === "h" || char === "n") {
        lw += char;
      } else {
        temp += char;
      }
    }
    ans.push(temp);
  }
  if (t > 0) {
    ans.push(lw);
  }

  if (ans[ans.length - 1] === "") {
    ans = ans.slice(0, ans.length - 1);
  }
  let temp = ans.join(" ");
  console.log(temp, ans);
  return temp;
}
