class Repository {
  // INICIALIZADORES
  constructor() {
    this.initialize();
  }
  static initialize() {
    this._allUsers = [];
    this._allMessages = [];
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

  static getAllMessage() {
    return this._allMessages;
  }

  static getMessageByUserCode(code) {
    let allMessages = [];
    for (let message of this.getAllMessage()) {
      if (message.getSender() === code || message.getReceiver())
        allMessages.push(message);
      else continue;
    }
    return allMessages;
  }

  static getMessageBySubject(subject) {
    for (let message of this.getAllMessage()) {
      if (message.getSubject() === subject) return message;
      else return false;
    }
  }

  // SETTERS

  static setMessages(message) {
    this._allMessages.push(message);
  }

  static setUsers(value) {
    this._allUsers.push(value);
  }

  // Demais metodos

  static isRegistered(code) {
    let result = this.getAllUsers().some((element, index) => {
      return element.getCode().toString() === code.toString();
    });
    return result;
  }
}

module.exports = Repository;
