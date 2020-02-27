const RepositoryAccess = require("../db/repository_access");

class UserAuth {
  static validateUser(name, code) {
    if (!(name.length < 3 || code.toString().length < 4)) {
      if (RepositoryAccess.getUser().length < 1) {
        return true;
      } else {
        return !RepositoryAccess.getUser().some(
          el => el.getCode() === code.toString()
        );
      }
    }
  }
}

module.exports = UserAuth;
