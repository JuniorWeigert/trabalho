const User = require("../../../models/user/user");
const UserRepository = require("../../../repository/user_repository");

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

  getUserNameByCode(code){
    return UserRepository.getUserNameByCode(code);
  }

  saveUser(user) {
    UserRepository.saveUser(user);
  }

  validateNewUser(name, code) {
    if (name !== "" && code !== "") {
      if (!(name.length < 3 || code.toString().length < 4)) {
        if (UserRepository.getAllUsers().length < 1) {
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
    return UserRepository.isRegistered(code) ? true : false;
  }
}

module.exports = UserService;
