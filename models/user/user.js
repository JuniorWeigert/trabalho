class User {
  constructor(name, code) {
    this.name = name;
    this.code = code;
    this.receivedMessage = [];
    this.sendedMessage = [];
  }

  getName() {
    return this.name;
  }

  getCode() {
    return this.code;
  }
  getReceivedMessage() {
    return this.receivedMessage;
  }

  setReceivedMessage(message) {
    this.receivedMessage.push(message);
  }

  getSendedMessage() {
    return this.sendedMessage;
  }

  setSendedMessage(message) {
    this.sendedMessage.push(message);
  }
}

module.exports = User;
