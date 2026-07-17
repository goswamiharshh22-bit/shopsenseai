const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({

    organization: {
        type: String,
        required: true
    },

    customerAge: {
        type: Number,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    productName: {
        type: String,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    discount: {
        type: Number,
        default: 0
    },

    rating: {
        type: Number,
        default: 5
    },

    purchaseDate: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Transaction", transactionSchema);