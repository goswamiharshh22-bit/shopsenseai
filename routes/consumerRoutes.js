const express = require("express");
const router = express.Router();

const {
  addConsumer,
  getConsumers,
  getConsumer,
  updateConsumer,
  deleteConsumer,
} = require("../controllers/consumerController");

router.post("/", addConsumer);
router.get("/", getConsumers);
router.get("/:id", getConsumer);
router.put("/:id", updateConsumer);
router.delete("/:id", deleteConsumer);

module.exports = router;