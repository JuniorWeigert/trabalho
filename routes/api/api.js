const express = require("express");
const router = express.Router();
const ApiHandler = require("../../controller/api/api_handler");

router.post("/api", (req, res) => ApiHandler.handler(req, res));

module.exports = router;
