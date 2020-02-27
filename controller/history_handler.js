const RepositoryAccess = require("../db/repository_access");

class Handler {
  static handler(req, res) {
    if (RepositoryAccess.isRegistered(req.body.code)) {
      res.status(200).send(RepositoryAccess.findUser(req.body.code));
    } else res.status(201).send("Usuario não cadastrado");
  }
}

module.exports = Handler;
