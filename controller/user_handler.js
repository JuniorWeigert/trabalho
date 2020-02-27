const SaveUser = require("../models/user/save_user");

class Handler {
  handler(req, res) {
    let userData = req.body;
    if (SaveUser.record(userData.name, userData.code)) {
      res.status(200).send("Usuario cadastrado");
    } else res.status(201).send("Usuario não cadastrado");
  }
}

module.exports = Handler;
