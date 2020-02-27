const User = require("./user");
const RepositoryAccess = require("../../db/repository_access");
const Authenticator = require("../../service/user_auth");

class SaveUser {
  static record(name, code) {
    // Valida dados do usuario
    if (Authenticator.validateUser(name, code)) {
      //instancia a classe
      let user = new User(name, code);
      //salva a classe
      RepositoryAccess.registerUser(user);
      console.log(RepositoryAccess.getUser());
      //retorna true caso seja cadastrado
      return true;
    } else return false;
  }
}

module.exports = SaveUser;
