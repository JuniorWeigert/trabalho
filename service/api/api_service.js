//Importando modulos
const UserService = require("../app/user/user_service");
const MessageService = require("../app/message/message_service");
const axios = require("axios");
//Link da API
const URL = "https://foaas.com";
//Instanciando classes
let userService = new UserService();
let messageService = new MessageService();
let PATH = "";

class apiService {
  async apiHandler(req) {
    if (this.validateUsers(req.body.sender, req.body.receiver)) {
      await this.editPath(req);
    }
  }
  validateUsers(sender, receiver) {
    if (
      userService.isRegistered(receiver) &&
      userService.isRegistered(sender) &&
      messageService.isSame(sender, receiver)
    ) {
      return true;
    } else {
      return false;
    }
  }

  editPath(req) {
    let senderName = userService.getUserNameByCode(req.body.sender);
    let receiverName = userService.getUserNameByCode(req.body.receiver);
    switch (req.body.message) {
      case "btn-awe":
        PATH = `/awesome/${senderName}`;
        break;
      case "btn-off":
        PATH = `/back/${receiverName}/${senderName}`;
        break;
      case "btn-dicks":
        PATH = `/bag/${senderName}`;
        break;
      case "btn-bday":
        PATH = `/bday/${receiverName}/${senderName}`;
        break;
      case "btn-why":
        PATH = `/because/${senderName}`;
        break;
    }

    this.requestFoaas(req);
  }

  requestFoaas(req) {
    axios({
      method: "get",
      url: URL + PATH
    })
      .then(res => {
        console.log(res.data, res.status);
        if (res.status === 200) {
          messageService.sendMessage(
            req.body.sender,
            req.body.receiver,
            req.body.subject,
            res.data.message
          );
          return true;
        } else {
          return false;
        }
      })
      .catch(err => {
        console.log(err);
        return false;
      });
  }
}

module.exports = apiService;
