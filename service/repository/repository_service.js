const Repository = require("../../repository/repository");
Repository.initialize();

class RepositoryService {
  static saveUser(user) {
    Repository.setUsers(user);
  }
  static saveMessage(message) {
    Repository.setMessages(message);
  }

  static findUser(code) {
    let user = Repository.getUserByCode(code);
    return user;
  }

  static userExists(code) {
    return Repository.isRegistered(code);
  }

  static getMessageByUserCode(code) {
    return Repository.getMessageByUserCode(code);
  }

  static listAllUsers() {
    return Repository.getAllUsers();
  }

  static getAllMessages() {
    return Repository.getAllMessage();
  }

  static getUserName(code) {
    return Repository.getUserNameByCode(code);
  }
}

module.exports = RepositoryService;
