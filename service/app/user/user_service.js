const User = require("../../../models/user/user");
const UserRepository = require("../../../repository/user_repository");

class UserService {

  constructor() {
      this.userRepository = new UserRepository();
  }

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
    return this.userRepository.getUserNameByCode(code);
  }

  saveUser(user) {
    try{
      this.userRepository.saveUser(user);
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

    if (this.userRepository.getAllUsers().length < 1) {
      return true;
    } 
    
    if (this.isRegistered(code)) {
      return false;
    }

    return true;
  }
  
  isRegistered(code) {
    let result = this.userRepository.getAllUsers().some((element) => {
      return element.getCode().toString() === code.toString();
    });
    return result;
  }
}

module.exports = UserService;
