function isItBugged(code) {
  //hmm, Looks like its bugged man!
  let pattern =
    /^([0-2][0-9]|3[0-1])-(0[0-9]|1[0-2])-(\d{4})\s(([0-1][0-9]|2[0-4]):[0-5][0-9])$/;
  //  console.log(code.match(pattern))
  return code.match(pattern) !== null;
}

// concept : code.match(pattern)

// regex code starts with /^ and ends $/
// or operation in it -> |
// inccluding numbers operation [0-9]
