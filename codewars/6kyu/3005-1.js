// this isn't quite right - it's not catching all the cases
const cockney = /\bh/gi;
const replacement = "`";

// concept :
// in regex : \b indicates word boundary -> \bc --> cat , car , !anchor and vice versa for \B
