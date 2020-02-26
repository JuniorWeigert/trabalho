const User = require("./user");
const Saved = require("../../db/index");
const Auth = require("../../service/userAuth");

Saved.initializeRepo();

class RecordUser {
  constructor(name, code) {
    this.record(name, code);
  }

  static record(name, code) {
    console.log(name, code);
    if (Auth.validateUser(name, code)) {
      let user = new User(name, code);
      Saved.setUsers(user);
      return true;
    } else {
      return false;
    }
  }

  static listUsers() {
    let formatedUsers = Saved.getUsers().forEach(element => {
      formatedUsers.push({ name: element.name, code: element.code });
    });

    return formatedUsers;
  }
}

module.exports = RecordUser;
