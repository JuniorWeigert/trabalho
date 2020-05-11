const ApiService = require("../../service/api/api_service");

class ApiController {

  constructor (){
    this.apiService = new ApiService();
  }

  fooasMessageHandler(req, res) {
    if (this.apiService.makeApiRequest(req)) {
      res.status(200).send("Integração realizada com sucesso");
    } else {
      res.status(201).send("Dados invalidos!");
    }
  }
}

module.exports = ApiController;
