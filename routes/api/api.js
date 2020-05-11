const express = require("express");
const router = express.Router();
const ApiController = require("../../controller/api/api_controller");
let api_controller = new ApiController();

router.post("/api", (req, res) => {
  api_controller.fooasMessageHandler(req, res);
});

module.exports = router;
