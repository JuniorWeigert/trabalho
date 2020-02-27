class Message {
  constructor(sender, receiver, subject, bodyMessage) {
    (this._sender = sender),
      (this._receiver = receiver),
      (this._subject = subject),
      (this._bodyMessage = bodyMessage),
      (this._receiverName = ""),
      (this._senderName = "");
  }

  getSender() {
    return this._sender;
  }
  getReceiver() {
    return this._receiver;
  }
  getSubject() {
    return this._subject;
  }
  getBodyMessage() {
    return this._bodyMessage;
  }
  getReceiverName() {
    return this._receiverName;
  }
  getSenderName() {
    return this._receiverName;
  }

  // Metodos Setters
  setReceiverName(value) {
    this._receiverName = value;
  }
  setSenderName(value) {
    this._senderName = value;
  }
}

module.exports = Message;
