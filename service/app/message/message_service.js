const Message = require("../../../models/message/message");
const MessageRepository = require("../../../repository/message_repository");
const UserRepository = require("../../../repository/user_repository");

class MessageService {
  sendMessage(sender, receiver, subject, bodyMessage) {
    if (this.validateMessage(sender, receiver, subject, bodyMessage)) {
      let newMessage = new Message(sender, receiver, subject, bodyMessage);
      this.saveMessage(newMessage);
      console.log('mensagem enviada');
      console.log(MessageRepository.getAllMessage());
      return true;
    } else return false;
    
  }

  saveMessage(message) {
    MessageRepository.saveMessage(message);
    message.setSenderName(UserRepository.getUserNameByCode(message.getSender()));
    message.setReceiverName(
      UserRepository.getUserNameByCode(message.getReceiver())
    );
  }
  validateMessage(sender, receiver, subject, bodyMessage) {
    if (this.verifyEmptyCamps(sender, receiver, subject, bodyMessage)) {
      if (this.validateUsers(sender) && this.validateUsers(receiver)) {
        try {
          if (this.isSame(sender, receiver)) {
            return true;
          }
        } catch (err) {
          console.log(err);
        }
      } else return false;
    } else return false;
  }

  verifyEmptyCamps(sender, receiver, subject, bodyMessage) {
    if (
      sender.toString() === "" ||
      receiver.toString() === "" ||
      subject.toString() === "" ||
      bodyMessage.toString() === ""
    ) {
      return false;
    } else return true;
  }

  validateUsers(code) {
    return UserRepository.isRegistered(code) ? true : false;
  }

  isSame(sender, receiver) {
    return sender.toString() !== receiver.toString();
  }
}

module.exports = MessageService;
