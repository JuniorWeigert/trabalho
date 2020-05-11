const HistoryService = require("../../service/app/history/history_service");

class HistoryController {

  constructor(){
    this.historyService = new HistoryService();
  }


  requestUserMessageHistory(req, res) {
    if (!this.historyService.getUserHistoryMessages(req)) {
      return res.status(201).send("usuario não cadastrado ou não encontrado");
    } else return res.status(200).send(this.historyService.getUserHistoryMessages(req));
  }
}

module.exports = HistoryController;
