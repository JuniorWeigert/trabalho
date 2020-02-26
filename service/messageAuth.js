const Saved = require("../db/index");

class MessageAuth {
  static validateMessage(sender, receiver, subject, bodyMessage) {
    let isValid = false;
    console.log("vendo se os campos esta vazios");
    if (
      !(
        sender.toString() === "" ||
        receiver.toString() === "" ||
        subject.toString() === "" ||
        bodyMessage.toString() === ""
      )
    ) {
      console.log("vendo se esta registrado");
      if (Saved.isRegistered(sender) && Saved.isRegistered(receiver)) {
        if (sender.toString() === receiver.toString()) {
          isValid = false;
        } else isValid = true;
      }
    }
    return isValid;
  }
}

module.exports = MessageAuth;
