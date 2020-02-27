const express = require("express");
const Message = require("../../controller/message_handler");
const User = require("../../controller/user_handler");
const History = require("../../controller/history_handler");
const router = express.Router();

// ******** GET ******** //

// Pagina inicial (index/root)
router.get("/", (req, res) => res.render("index.html", {}));

// Pagina para cadstro de usuario
router.get("/record.html", (req, res) => {
  res.render("record.html", {});
});

// Pagina de envio
router.get("/send.html", (req, res) => {
  res.render("send.html", {});
});

// Pagina de Historico
router.get("/history", (req, res) => {
  res.render("history.html", {});
});

router.get("/sendHot.html", (req, res) => {
  res.render("sendHot.html", {});
});

// ******** POST ******** //

// Post para envio de mensagem
router.post("/send", (req, res) => Message.handler(req, res));

// Post para cadastramento de Usuario
router.post("/record", (req, res) => User.handler(req, res));

// Post para busca de historico de mensagens
router.post("/history", (req, res) => History.handler(req, res));

module.exports = router;
