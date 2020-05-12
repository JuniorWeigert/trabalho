const Message = require("../../../models/message/message");
const MessageRepository = require("../../../repository/message_repository");
const UserService = require("../../../service/app/user/user_service");
const UserRepository = require("../../../repository/user_repository");

class MessageService {

  constructor() {
    this.messageRepository = new MessageRepository();
    this.userService = new UserService();
    this.userRepository = new UserRepository();
  }

  sendMessage(sender, receiver, subject, bodyMessage) {
    if (!(this.validateMessage(sender, receiver, subject, bodyMessage))) {
      return false
    }

    let newMessage = new Message(sender, receiver, subject, bodyMessage);
    this.saveMessage(newMessage);   
    
    return true;

  }

  saveMessage(message) {
    this.messageRepository.saveMessage(message);
    message.setSenderName(this.userRepository.getUserNameByCode(message.getSender()));
    message.setReceiverName(
      this.userRepository.getUserNameByCode(message.getReceiver())
    );
  }

  validateMessage(sender, receiver, subject, bodyMessage) {
    if (!(this.verifyEmptyCamps(sender, receiver, subject, bodyMessage))) {
      return false;
    }

    if (!(this.validateUsers(sender) && this.validateUsers(receiver))) {
      return false
    }

    if (!(this.isSame(sender, receiver))) {
      return false;
    }

    return true;

  }

  verifyEmptyCamps(sender, receiver, subject, bodyMessage) {
    if (
      sender.toString() === "" ||
      receiver.toString() === "" ||
      subject.toString() === "" ||
      bodyMessage.toString() === ""
    ) {
      return false;
    }
    return true;
  }

  validateUsers(code) {
    return this.userService.isRegistered(code) ? true : false;
  }

  isSame(sender, receiver) {
    return sender.toString() !== receiver.toString();
  }
}

module.exports = MessageService;
