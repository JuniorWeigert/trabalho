class Repository {
  constructor() {
    this.initialize();
  }
  static initialize() {
    this._allUsers = [];
  }

  static getUsers() {
    return this._allUsers;
  }

  static setUsers(value) {
    this._allUsers.push(value);
  }
}

module.exports = Repository;
