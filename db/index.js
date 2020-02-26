class Saved {
  constructor() {
    this.initializeRepo();
  }
  static initializeRepo() {
    this._allUsers = [];
  }

  static getUsers() {
    return this._allUsers;
  }

  static setUsers(value) {
    this._allUsers.push(value);
  }

  static findUser(code) {
    console.log("dentro do find user");
    return this._allUsers[this.getIndex(code)];
  }

  static getLength() {
    return this._allUsers.length;
  }

  static isRegistered(code) {
    let user = this.findUser(code);
    if (user === undefined || user === null) {
      return false;
    } else return true;
  }

  static getIndex(code) {
    console.log("dentro do get index");
    for (let index in this._allUsers) {
      if (this._allUsers[index].code === code) return index;
    }
  }

  static getUserName(code) {
    console.log(this.findUser(code).name);
    return this.findUser(code).name;
  }
}

module.exports = Saved;
