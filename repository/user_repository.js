class UserRepository {
  // INICIALIZADORES
  constructor() {
    this.initialize();
  }
  static initialize() {
    this._allUsers = [];
  }

  // GETTERS

  static getAllUsers() {
    console.log(this._allUsers);
    return this._allUsers;
  }

  static getUserByCode(code) {
    for (let user of this._allUsers) {
      if (user._code.toString() === code.toString()) {
        return user;
      }
    }
  }

  static getUserNameByCode(code) {
    let user = this.getUserByCode(code);
    return user._name;
  }

  static saveUser(user) {
    this._allUsers.push(user);
  }

  // Demais metodos

  static isRegistered(code) {
    let result = this.getAllUsers().some((element, index) => {
      return element.getCode().toString() === code.toString();
    });
    return result;
  }
}

module.exports = UserRepository;
