const UserService = require("../user/user_service");
const MessageRepository = require("../../../repository/message_repository");


class HistoryService {
  constructor(){
    this.userService = new UserService();
  }

  getUserHistoryMessages(req) {
    if (this.userService.isRegistered(req.body.code)) {
      return this.findMessages(req.body.code);
    } else return false;
  }

  findMessages(userCode) {
    let sendedMessages = [];
    let receivedMessages = [];
    sendedMessages.push(MessageRepository.getMessageBySenderCode(userCode));
    receivedMessages.push(MessageRepository.getMessageByReceiverCode(userCode));
    let data = {
      sendedMessages,
      receivedMessages
    }
    return data;
  }
}

module.exports = HistoryService;
