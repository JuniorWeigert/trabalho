const SaveMessage = require("../models/message/save_message");

class Handler {
  handler(req, res) {
    let messageData = req.body;
    if (
      SaveMessage.sendMessage(
        messageData.sender,
        messageData.receiver,
        messageData.subject,
        messageData.bodyMessage
      )
    ) {
      res.status(200).send("Mensagem cadastrada com sucesso");
    } else {
      res.status(400).send("Mensagem não cadastrada, campos invalidos");
    }
  }
}

module.exports = Handler;
