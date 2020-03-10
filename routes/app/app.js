const express = require("express");
const MessageController = require("../../controller/app/message_controller");
const UserController = require("../../controller/app/user_controller");
const HistoryController = require("../../controller/app/history_controller");
const router = express.Router();

// ******** GET ******** //

// Pagina inicial (index/root)
router.get("/", (req, res) => res.render("index.html", {}));
router.get("/index", (req, res) => res.render("index.html", {}));

// Pagina para cadstro de usuario
router.get("/record", (req, res) => {
  res.render("record.html", {});
});

// Pagina de envio
router.get("/send", (req, res) => {
  res.render("send.html", {});
});

// Pagina de Historico
router.get("/history", (req, res) => {
  res.render("history.html", {});
});

router.get("/api", (req, res) => {
  res.render("send_hot.html", {});
});

// ******** POST ******** //

// Post para envio de mensagem
router.post("/send", (req, res) => {
  let message = new MessageController();
  return message.messageHandler(req, res);
});

// Post para cadastramento de Usuario
router.post("/record", (req, res) => {
  let user = new UserController();
  return user.userHandler(req, res);
});

// Post para busca de historico de mensagens
router.post("/history", (req, res) => {
  console.log("chamando a controller");
  let history = new HistoryController();
  return history.historyHandlerController(req, res);
});

module.exports = router;
