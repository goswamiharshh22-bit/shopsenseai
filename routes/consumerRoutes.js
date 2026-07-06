const express = require("express");
const router = express.Router();

const {
  seedData
} = require("../controllers/consumerController");

router.post("/seed", seedData);

module.exports = router;