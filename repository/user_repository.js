const inMemoryDatabase = require('../infrastructure/data/in_memory');

class UserRepository {


  getAllUsers() {
    return inMemoryDatabase.users;
  }

  getUserByCode(code) {
    for (let user of this.getAllUsers()) {
      if (user._code.toString() === code.toString()) {
        return user;
      }
    }
  }

  getUserNameByCode(code) {
    let user = this.getUserByCode(code);
    return user._name;
  }

  saveUser(user) {
    inMemoryDatabase.users.push(user);
  }


}

module.exports = UserRepository;
