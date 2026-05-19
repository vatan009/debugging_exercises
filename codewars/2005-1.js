function validate(username, password) {
  var database = new Database();
  return database.login(username, password);
}
