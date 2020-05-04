const HistoryService = require("../../service/app/history_service");
const historyService = new HistoryService();

class HistoryController {
  historyHandlerController(req, res) {
    if (!historyService.historyHandler(req)) {
      return res.status(201).send("usuario não cadastrado ou não encontrado");
    } else return res.status(200).send(historyService.historyHandler(req));
  }
}

module.exports = HistoryController;
