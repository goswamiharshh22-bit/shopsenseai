const express = require('express');
const router = express.Router();
const {
  seedCustomersFromCSV,
  getCustomers,
  createCustomerPurchase,
} = require('../controllers/customerController');

// GET /api/customers
router.get('/', getCustomers);

// POST /api/customers/seed  -> reads dataset/Mall_Customers.csv and seeds DB
router.post('/seed', seedCustomersFromCSV);

// POST /api/customers/purchases
router.post('/purchases', createCustomerPurchase);

module.exports = router;
