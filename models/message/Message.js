const Auth = require("../../service/messageAuth");
const Saved = require("../../db/index");

class Message {
  static sendMessage(sender, receiver, subject, bodyMessage) {
    console.log("dentro da function SendMessage");
    console.log(sender, receiver, subject, bodyMessage);
    let message = {
      sender,
      receiver,
      subject,
      bodyMessage,
      receiverName: "",
      senderName: "",
      isSended: false
    };
    if (Auth.validateMessage(sender, receiver, subject, bodyMessage)) {
      console.log("dentro do if da classe SendMessage");
      message.isSended = true;
      message.senderName = Saved.findUser(sender).name;
      message.receiverName = Saved.findUser(receiver).name;
      console.log("antes do saved.findo user");
      Saved.findUser(sender).setSendedMessage(message);
      Saved.findUser(receiver).setReceivedMessage(message);
      return true;
    } else {
      console.log("dentro do else");
      return false;
    }
  }
}

module.exports = Message;
