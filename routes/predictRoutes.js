const express = require("express");
const router = express.Router();

const { predictConsumer } = require("../controllers/predictController.js");

router.post("/", predictConsumer);

module.exports = router;