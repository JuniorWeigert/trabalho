const UserService = require("../user/user_service");
const RepositoryService = require("../repository/repository_service");

const userService = new UserService();

class HistoryService {
  historyHandler(req) {
    if (userService.isRegistered(req.body.code)) {
      return this.findMessages(req.body.cod);
    } else return false;
  }

  findMessages(userCode) {
    return RepositoryService.getMessageByUserCode(userCode);
  }
}

module.exports = HistoryService;
