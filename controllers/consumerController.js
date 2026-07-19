const Consumer = require("../models/consumer");

// Add Customer
const addConsumer = async (req, res) => {
  try {
    const consumer = await Consumer.create(req.body);

    res.status(201).json({
      success: true,
      data: consumer,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get All Customers
const getConsumers = async (req, res) => {
  try {
    const consumers = await Consumer.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: consumers,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get Single Customer
const getConsumer = async (req, res) => {
  try {
    const consumer = await Consumer.findById(req.params.id);

    if (!consumer) {
      return res.status(404).json({
        success: false,
        message: "Customer not found",
      });
    }

    res.status(200).json({
      success: true,
      data: consumer,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Update Customer
const updateConsumer = async (req, res) => {
  try {
    const consumer = await Consumer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      data: consumer,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Delete Customer
const deleteConsumer = async (req, res) => {
  try {
    await Consumer.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Customer deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  addConsumer,
  getConsumers,
  getConsumer,
  updateConsumer,
  deleteConsumer,
};