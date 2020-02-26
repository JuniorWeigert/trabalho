const express = require("express");
const router = express.Router();
const axios = require("axios");
const Saved = require("../../db/index");
const Message = require("../../models/message/Message");
Saved.initializeRepo();
let URL = "https://foaas.com";

router.post("/api", (req, res) => {
  let user = req.body;
  let senderName = Saved.getUserName(user.sender);
  let receiverName = Saved.getUserName(user.receiver);
  let apiResponse = false;
  console.log(receiverName);
  console.log(senderName);
  switch (user.message) {
    case "btn-awe":
      URL += `/awesome/${user.sender}`;
      break;
    case "btn-off":
      URL += `/back/${receiverName}/${senderName}`;
      break;
    case "btn-dicks":
      URL += `/bag/${senderName}`;
      break;
    case "btn-bday":
      URL += `/bday/${receiverName}/${senderName}`;
      break;
    case "btn-why":
      URL += `/because/${senderName}`;
      break;
  }

  axios({
    method: "get",
    url: URL
  }).then(resp => {
    console.log(resp.data);
    Message.sendMessage(
      user.sender,
      user.receiver,
      user.subject,
      resp.data.message
    );
  });
});

module.exports = router;
