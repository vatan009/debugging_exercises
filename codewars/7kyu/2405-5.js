function applyFeedback(battlescape, enemy, position) {
  //   console.log(...battlescape);
  console.log([...battlescape][position]);
  if ([...battlescape][position] === enemy) return DISPENSE_TREAT;
  else return RELEASE_NITROGEN_SHOWER;
}
// JavaScript uses UTF-16 encoding, where most emojis are represented as surrogate pairs—two 16-bit code units—because their Unicode code points exceed the 16-bit limit.
// Methods like charAt() or charCodeAt() operate on these individual 16-bit units, not the complete emoji, leading to unexpected results.
// Use modern JavaScript features like the spread operator ([...str]), codePointAt(), or for...of loops to correctly handle full emoji characters.
