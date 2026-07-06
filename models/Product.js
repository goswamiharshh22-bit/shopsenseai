const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: String,
  category: String,
  sales: Number,
  price: Number,
  quantity: Number,
    createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Product", productSchema);