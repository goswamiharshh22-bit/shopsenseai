const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema(
  {
    category: { type: String, required: true, trim: true },
    productName: { type: String, required: true, trim: true },
    quantity: { type: Number, required: true, min: 1 },
    amount: { type: Number, required: true, min: 0 },
    purchasedAt: { type: Date, default: Date.now },
  },
  { _id: false }
);

const customerSchema = new mongoose.Schema({
  customerId: Number,
  gender: String,
  age: Number,
  annualIncome: Number,
  spendingScore: Number,
  averageSpending: Number,
  purchases: [purchaseSchema],
}, { timestamps: true });

module.exports = mongoose.model("Customer", customerSchema);
