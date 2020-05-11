const MessageService = require("../../service/app/message/message_service");

class MessageController {
  
  constructor(){
    this.messageService = new MessageService();

  }

  createNewMessage(req, res) {
    let messageData = req.body;
    console.log(messageData)
    if (
      this.messageService.sendMessage(
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
