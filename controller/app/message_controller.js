const MessageService = require("../../service/message/message_service");
let message = new MessageService();

class MessageController {
  messageHandler(req, res) {
    let messageData = req.body;
    if (
      message.sendMessage(
        messageData.sender,
        messageData.receiver,
        messageData.subject,
        messageData.bodyMessage
      )
    ) {
      res.status(200).send("Mensagem cadastrada com sucesso");
    } else {
      res.status(201).send("Mensagem não cadastrada, campos invalidos");
    }
  }
}

module.exports = MessageController;
