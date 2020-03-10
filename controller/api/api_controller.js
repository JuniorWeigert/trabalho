const ApiService = require("../../service/api/api_service");
let apiService = new ApiService();

class ApiController {
  apiHandler(req, res) {
    if (apiService.apiHandler(req)) {
      res.status(200).send("Integração realizada com sucesso");
    } else {
      res.status(201).send("Dados invalidos!");
    }
  }
}

module.exports = ApiController;
