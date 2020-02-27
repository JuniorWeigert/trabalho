const express = require("express");
const router = express.Router();
const ApiHandler = require("../../controller/api/api_handler");
let api_handler = new ApiHandler();

router.post("/api", (req, res) => {
  api_handler.handler(req, res);
});

module.exports = router;
