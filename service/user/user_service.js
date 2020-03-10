const User = require("../../models/user/user");
const RepositoryService = require("../repository/repository_service");

class UserService {
  createUser(name, code) {
    // Valida dados do usuario
    if (this.validateNewUser(name, code)) {
      //instancia a classe
      let user = new User(name, code);
      //salva o usuario
      this.saveUser(user);
      //retorna true caso seja cadastrado
      return true;
    } else return false;
  }

  saveUser(user) {
    RepositoryService.saveUser(user);
  }

  validateNewUser(name, code) {
    if (name !== "" && code !== "") {
      if (!(name.length < 3 || code.toString().length < 4)) {
        if (RepositoryService.listAllUsers().length < 1) {
          return true;
        } else if (!this.isRegistered(code)) {
          return true;
        } else {
          return false;
        }
      } else return false;
    } else return false;
  }

  isRegistered(code) {
    return RepositoryService.userExists(code);
  }
}

module.exports = UserService;
