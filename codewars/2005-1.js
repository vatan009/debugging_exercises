function validate(username, password) {
  if (password.includes("||") || password.includes("//")) {
    return "Wrong username or password!";
  }
  var database = new Database();
  return database.login(username, password);
}

// concept : string.includes(substr) returns true if string contains substring
