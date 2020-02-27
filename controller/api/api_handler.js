const axios = require("axios");
const RepositoryAccess = require("../../db/repository_access");
const saveMessage = require("../../models/message/save_message");
let BASE_URL = "http://foaas.com";

class Handler {
  static handler(req, res) {
    if (
      RepositoryAccess.isRegistered(req.body.sender) &&
      RepositoryAccess.isRegistered(req.body.receiver)
    ) {
      let senderName = RepositoryAccess.getUserName(req.body.sender);
      let receiverName = RepositoryAccess.getUserName(req.body.receiver);
      let PATH = "";
      switch (req.body.message) {
        case "btn-awe":
          PATH = `/awesome/${senderName}`;
          break;
        case "btn-off":
          PATH = `/back/${receiverName}/${senderName}`;
          break;
        case "btn-dicks":
          PATH = `/bag/${senderName}`;
          break;
        case "btn-bday":
          PATH = `/bday/${receiverName}/${senderName}`;
          break;
        case "btn-why":
          PATH = `/because/${senderName}`;
          break;
      }

      try {
        axios({
          method: "get",
          url: BASE_URL + PATH
        }).then(resp => {
          console.log(resp.data, resp.status);
          res.status(resp.status).send(resp.data);
          saveMessage.sendMessage(
            req.body.sender,
            req.body.receiver,
            req.body.subject,
            resp.data.message
          );
        });
      } catch (err) {
        res.status(202).send({ error: "Falha na requisição" });
        console.log(err);
      }
    } else {
      res.status(201).send("Dados invalidos!");
    }
  }
}

module.exports = Handler;
