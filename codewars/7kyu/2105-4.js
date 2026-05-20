function calculateTotal(team1, team2) {
  let t1s = team1.reduce((t, c) => t % c);
  let t2s = team2.reduce((t, c, i) => i / c);
  return t1s < t2s;
}
