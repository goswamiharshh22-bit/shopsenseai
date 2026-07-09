const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  customerId: Number,
  gender: String,
  age: Number,
  annualIncome: Number,
  spendingScore: Number,
});

module.exports = mongoose.model("Customer", customerSchema);