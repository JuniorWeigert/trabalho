//Importando modulos
const UserService = require("../app/user/user_service");
const MessageService = require("../app/message/message_service");
const axios = require("axios");
//Link da API
const URL = "https://foaas.com";
//Instanciando classes


class ApiService {
  constructor(){
    this.userService = new UserService();
    this.messageService = new MessageService();
    this.PATH = "";
  }

  async makeApiRequest(req) {
    if (!(this.validateUsers(req.body.sender, req.body.receiver))) {
      return false;
    }
    await this.editPath(req);
  }
  validateUsers(sender, receiver) {
    if (
      !(this.userService.isRegistered(receiver) &&
      this.userService.isRegistered(sender) &&
      this.messageService.isSame(sender, receiver))
    ) {
      return false;
    }
      return true;
    
  }

  editPath(req) {
    let senderName = this.userService.getUserNameByCode(req.body.sender);
    let receiverName = this.userService.getUserNameByCode(req.body.receiver);
    switch (req.body.message) {
      case "btn-awe":
        this.PATH = `/awesome/${senderName}`;
        break;
      case "btn-off":
        this.PATH = `/back/${receiverName}/${senderName}`;
        break;
      case "btn-dicks":
        this.PATH = `/bag/${senderName}`;
        break;
      case "btn-bday":
        this.PATH = `/bday/${receiverName}/${senderName}`;
        break;
      case "btn-why":
        this.PATH = `/because/${senderName}`;
        break;
    }

    this.requestFoaas(req);
  }

  requestFoaas(req) {
    axios({
      method: "get",
      url: URL + this.PATH
    })
      .then(res => {
        console.log(res.data, res.status);
        
        if (!(res.status === 200)) {
          return false
        } 

        this.messageService.sendMessage(
          req.body.sender,
          req.body.receiver,
          req.body.subject,
          res.data.message
        );
        return true;

      })
      .catch(err => {
        console.log(err);
        return false;
      });
  }
}

module.exports = ApiService;
