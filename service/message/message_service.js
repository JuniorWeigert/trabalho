const Message = require("../../models/message/message");
const RepositoryService = require("../repository/repository_service");

class MessageService {
  sendMessage(sender, receiver, subject, bodyMessage) {
    if (this.validateMessage(sender, receiver, subject, bodyMessage)) {
      let newMessage = new Message(sender, receiver, subject, bodyMessage);
      this.saveMessage(newMessage);
      return true;
    } else return false;
  }

  saveMessage(message) {
    RepositoryService.saveMessage(message);
    message.setSenderName(RepositoryService.getUserName(message.getSender()));
    message.setReceiverName(
      RepositoryService.getUserName(message.getReceiver())
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
    return RepositoryService.userExists(code);
  }

  isSame(sender, receiver) {
    return sender.toString() !== receiver.toString();
  }
}

module.exports = MessageService;
