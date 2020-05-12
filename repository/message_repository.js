const inMemoryDatabase = require('../infrastructure/data/in_memory');
class MessageRepository {


  saveMessage(message) {    
    inMemoryDatabase.messages.push(message);
  }

  getAllMessage() {
    return inMemoryDatabase.messages;
  }

  getMessageBySenderCode(code) {
    let allUserSendedMesseges = [];
    for (let message of this.getAllMessage()) {
      console.log(message, code);
      if (message._sender.toString() === code.toString())
        allUserSendedMesseges.push(message);
      else continue;
    }
    return allUserSendedMesseges;
  }

  getMessageByReceiverCode(code) {
    let allUserReceivedMesseges = [];
    for (let message of this.getAllMessage()) {
      if (message._receiver == code)
        allUserReceivedMesseges.push(message);
      else continue;
    }
    return allUserReceivedMesseges;
  }

  getMessageBySubject(subject) {
    for (let message of this.getAllMessage()) {
      if (message.getSubject() === subject) return message;
      else return false;
    }
  }

}

module.exports = MessageRepository;
