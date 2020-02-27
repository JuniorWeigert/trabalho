class User {
  constructor(name, code) {
    this._name = name;
    this._code = code;
    this._receivedMessage = [];
    this._sendedMessage = [];
  }

  getName() {
    return this._name;
  }

  getCode() {
    return this._code;
  }
  getReceivedMessage() {
    return this._receivedMessage;
  }

  setReceivedMessage(message) {
    this._receivedMessage.push(message);
  }

  getSendedMessage() {
    return this._sendedMessage;
  }

  setSendedMessage(message) {
    this._sendedMessage.push(message);
  }
}

module.exports = User;
