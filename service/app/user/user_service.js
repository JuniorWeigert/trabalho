const User = require("../../../models/user/user");
const UserRepository = require("../../../repository/user_repository");

class UserService {
  createUser(name, code) {
    // Valida dados do usuario
    if (!(this.validateNewUser(name, code))) {
      return false
    }

    let user = new User(name, code);
    this.saveUser(user);
    return true;
  }

  getUserNameByCode(code){
    return UserRepository.getUserNameByCode(code);
  }

  saveUser(user) {
    try{
      UserRepository.saveUser(user);
    } catch(err){
      console.log(err);
    }
  }

  validateNewUser(name, code) {
    if(name === '' || code === ''){
      return false;
    }

    if(name.length < 3 || code.toString().length < 4){
      return false;
    }

    if (UserRepository.getAllUsers().length < 1) {
      return true;
    } 
    
    if (this.isRegistered(code)) {
      return false;
    }

    return true;
  }

  isRegistered(code) {
    return UserRepository.isRegistered(code) ? true : false;
  }
}

module.exports = UserService;
