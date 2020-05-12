const UserService = require("../user/user_service");
const MessageRepository = require("../../../repository/message_repository");


class HistoryService {
  constructor() {
    this.userService = new UserService();
    this.messageRepository = new MessageRepository();
  }

  getUserHistoryMessages(req) {
    if (this.userService.isRegistered(req.body.code)) {
      return this.findMessages(req.body.code);
    } else return false;
  }

  findMessages(userCode) {
    let sendedMessages = [];
    let receivedMessages = [];
    sendedMessages.push(this.messageRepository.getMessageBySenderCode(userCode));
    receivedMessages.push(this.messageRepository.getMessageByReceiverCode(userCode));
    let data = {
      sendedMessages,
      receivedMessages
    }
    return data;
  }
}

module.exports = HistoryService;
