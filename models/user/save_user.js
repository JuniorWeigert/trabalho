const User = require("./user");
const RepositoryAccess = require("../../db/repository_access");
const Authenticator = require("../../service/user_auth");
let authenticator = new Authenticator();

class SaveUser {
  static record(name, code) {
    // Valida dados do usuario
    if (authenticator.validateUser(name, code)) {
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
