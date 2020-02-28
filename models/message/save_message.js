const Authenticator = require("../../service/message_auth");
const Message = require("./message");
const RepositoryAccess = require("../../db/repository_access");
let authenticator = new Authenticator();

class SaveMessage {
  sendMessage(sender, receiver, subject, bodyMessage) {
    if (authenticator.validateMessage(sender, receiver, subject, bodyMessage)) {
      //criando objeto e modificando dados da mensagem
      let newMessage = new Message(sender, receiver, subject, bodyMessage);
      console.log(newMessage);
      console.log(RepositoryAccess.findUser(sender));
      console.log(
        RepositoryAccess.findUser(sender),
        RepositoryAccess.findUser(receiver),
        "2 logs com finduser"
      );
      newMessage.setSenderName(RepositoryAccess.findUser(sender)._name);
      newMessage.setReceiverName(RepositoryAccess.findUser(receiver)._name);

      // salvando a mensagem para os senders e receivers
      RepositoryAccess.findUser(sender).setSendedMessage(newMessage);
      RepositoryAccess.findUser(receiver).setReceivedMessage(newMessage);
      // retorna true se a mensagem for valida e salva
      return true;
    } else return false;
  }
}

module.exports = SaveMessage;
