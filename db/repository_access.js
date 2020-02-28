const Repository = require("./index");
Repository.initialize();

class RepositoryAccess {
  static registerUser(user) {
    Repository.setUsers(user);
  }

  static findUser(code) {
    console.log("dentro do find", code);
    return this.getUser()[this.getUserIndex(code)];
  }

  static isRegistered(code) {
    let user = this.findUser(code);
    if (user !== undefined || user !== null) {
      return true;
    } else return false;
  }

  static getUserIndex(code) {
    console.log("dentro do get index");
    console.log(Repository.getUsers());
    for (let index = 0; index < this.getUser().length; index++) {
      if (this.getUser()[index].getCode() === code) {
        return index;
      }
    }
  }

  static getUser() {
    return Repository.getUsers();
  }

  static getUserName(code) {
    return this.findUser(code).getName();
  }
}

module.exports = RepositoryAccess;
