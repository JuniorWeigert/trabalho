const HistoryService = require("../../service/app/history_service");
const historyService = new HistoryService();

class HistoryController {
  historyHandlerController(req, res) {
    if (!historyService.historyHandler(req)) {
      res.status(201).send("usuario não cadastrado ou não encontrado");
    } else res.status(200).send(historyService.historyHandler(req));
  }
}

module.exports = HistoryController;
