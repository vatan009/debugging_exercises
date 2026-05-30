function insertAtIndexes(phrase, word, indexes) {
  let count = 0;
  let n = word.length;
  for (var i = 0; i < indexes.length; i++) {
    phrase =
      phrase.slice(0, indexes[i] + count) +
      word +
      phrase.slice(indexes[i] + count);
    count += n;
    console.log(phrase);
  }
  return phrase;
}
