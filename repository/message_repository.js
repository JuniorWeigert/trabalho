class MessageRepository {
  // INICIALIZADORES
  static initialize() {
    this._allMessages = [];
  }

  static saveMessage(message) {
    this.setMessages(message);
  }
  static getAllMessage() {
    return this._allMessages;
  }

  static getMessageBySenderCode(code) {
    let allUserSendedMesseges = [];
    for (let message of this.getAllMessage()) {
      console.log(message, code);
      if (message._sender.toString() === code.toString())
      allUserSendedMesseges.push(message);
      else continue;
    }
    return allUserSendedMesseges;
  }

  static getMessageByReceiverCode(code) {
    let allUserReceivedMesseges = [];
    for (let message of this.getAllMessage()) {
      if (message._receiver == code)
      allUserReceivedMesseges.push(message);
      else continue;
    }
    return allUserReceivedMesseges;
  }

  static getMessageBySubject(subject) {
    for (let message of this.getAllMessage()) {
      if (message.getSubject() === subject) return message;
      else return false;
    }
  }

  static setMessages(message) {
    this._allMessages.push(message);
  }
}

module.exports = MessageRepository;
