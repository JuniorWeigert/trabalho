const RepositoryAccess = require("../db/repository_access");

class MessageAuth {
  validateMessage(sender, receiver, subject, bodyMessage) {
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
      if (
        RepositoryAccess.isRegistered(sender) &&
        RepositoryAccess.isRegistered(receiver)
      ) {
        if (sender.toString() === receiver.toString()) {
          return false;
        } else return true;
      }
    }
  }
}

module.exports = MessageAuth;
