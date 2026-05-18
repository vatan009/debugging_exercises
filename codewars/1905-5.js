// speed of aircrafts is given in *knots*
// travelTime is in *minutes*
// travel distance should be returned in *kilometers*
function travelDistance(avgSpeed, travelTime) {
  const KM_PER_MILE = 1.609344;
  const travelHours = travelTime / 60;
  const travelMiles = avgSpeed * travelHours;
  const travelKms = travelMiles / KM_PER_MILE;

  return travelKms;
}
