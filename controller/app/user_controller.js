const UserService = require("../../service/user/user_service");
const userService = new UserService();

class UserController {
  userHandler(req, res) {
    let userData = req.body;
    if (userService.createUser(userData.name, userData.code)) {
      res.status(200).send("Usuario cadastrado");
    } else
      res.status(201).send("Usuario não cadastrado, favor verificar campos");
  }
}

module.exports = UserController;
