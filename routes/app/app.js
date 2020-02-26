const express = require("express");
const recUser = require("../../models/user/recordUser");
const Message = require("../../models/message/Message");
const router = express.Router();
const Saved = require("../../db/index");
Saved.initializeRepo();

("use strict");
// Root
router.get("/", (req, res) => {
  res.render("index.html", {});
});

// Record User
router.get("/record.html", (req, res) => {
  res.render("record.html", {});
});

router.post("/record", (req, res) => {
  let userData = req.body;
  if (recUser.record(userData.name, userData.code)) {
    res.send("success");
  } else {
    res.send("error");
  }
});

// Send Message
router.get("/send.html", (req, res) => {
  res.render("send.html", {});
});

router.post("/send", (req, res) => {
  let messageData = req.body;
  try {
    console.log("dentro do try");
    if (
      Message.sendMessage(
        messageData.sender,
        messageData.receiver,
        messageData.subject,
        messageData.bodyMessage
      )
    ) {
      res.send("success");
    } else res.send("error");
  } catch (e) {
    console.log("erro na message " + e);
  }
});

// History
router.get("/history", (req, res) => {
  res.render("history.html", {});
});

router.post("/history", (req, res) => {
  console.log("history");
  console.log(req.body);

  res.send(Saved.findUser(req.body.code));
});

//Send hot message foaas
router.get("/sendHot.html", (req, res) => {
  res.render("sendHot.html", {});
});

module.exports = router;
