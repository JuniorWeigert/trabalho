const UserService = require("../../service/app/user/user_service");


class UserController {

  constructor(){
    this.userService = new UserService();
  }
  
  createNewUser(req, res) {
    let userData = req.body;
    if (this.userService.createUser(userData.name, userData.code)) {
      res.status(200).send("Usuario cadastrado");
    } else
      res.status(201).send("Usuario não cadastrado, favor verificar campos");
  }
}

module.exports = UserController;
