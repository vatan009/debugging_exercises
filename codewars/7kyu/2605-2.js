let nextFiveDays = function (date) {
  let day = date.getDate();
  let month = date.getMonth().toString();
  let dates = [];

  for (var i = 0; i <= 5; i++) {
    dates.push(month + "/" + (day + i).toString());
  }
  console.log(dates);

  return dates.join(", ");
};
