const mongoose = require("mongoose");

const consumerSchema = new mongoose.Schema(
{
    customerId: String,
    age: Number,
    gender: String,
    city: String,
    product: String,
    category: String,
    quantity: Number,
    price: Number,
    purchaseDate: Date
},
{
    timestamps: true
});

module.exports = mongoose.model("Consumer", consumerSchema);