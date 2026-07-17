const fs = require('fs');
const path = require('path');
const Customer = require('../models/Customer');

const createCustomerPurchase = async (req, res) => {
  try {
    const { age, gender, category, product, quantity, purchaseAmount, averageSpending } = req.body;
    const requiredFields = { age, gender, category, product, quantity, purchaseAmount, averageSpending };
    const missing = Object.entries(requiredFields)
      .filter(([, value]) => value === undefined || value === null || value === '')
      .map(([field]) => field);

    if (missing.length) {
      return res.status(400).json({
        success: false,
        message: `Missing required fields: ${missing.join(', ')}`,
      });
    }

    const numericValues = { age, quantity, purchaseAmount, averageSpending };
    if (Object.values(numericValues).some((value) => !Number.isFinite(Number(value)))) {
      return res.status(400).json({ success: false, message: 'Numeric fields must contain valid numbers.' });
    }

    const customer = await Customer.create({
      gender: gender.trim(),
      age: Number(age),
      averageSpending: Number(averageSpending),
      purchases: [{
        category: category.trim(),
        productName: product.trim(),
        quantity: Number(quantity),
        amount: Number(purchaseAmount),
      }],
    });

    res.status(201).json({
      success: true,
      message: 'Customer purchase saved successfully.',
      data: customer,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
};

// Read CSV and seed customers into DB
const seedCustomersFromCSV = async (req, res) => {
  try {
    let csvPath = path.join(__dirname, '..', 'dataset', 'Mall_Customers.csv');
    if (!fs.existsSync(csvPath)) {
      const alt = path.join(__dirname, '..', 'customer', 'Mall_Customers.csv');
      if (fs.existsSync(alt)) csvPath = alt;
    }

    if (!fs.existsSync(csvPath)) {
      return res.status(400).json({ success: false, message: 'CSV not found in dataset/ or customer/ folders' });
    }

    const content = fs.readFileSync(csvPath, 'utf8');
    const lines = content.split(/\r?\n/).filter(Boolean);
    if (lines.length < 2) {
      return res.status(400).json({ success: false, message: 'CSV is empty or not found' });
    }

    const headers = lines[0].split(',').map((h) => h.trim());
    const rows = lines.slice(1);

    const customers = rows.map((row) => {
      const cols = row.split(',').map((c) => c.trim());
      const obj = {};
      headers.forEach((h, i) => {
        obj[h] = cols[i];
      });
      return obj;
    });

    // Map CSV columns to model fields
    const docs = customers.map((c) => ({
      customerId: c['CustomerID'] ? Number(c['CustomerID']) : undefined,
      gender: c['Gender'] || c['gender'] || '',
      age: c['Age'] ? Number(c['Age']) : undefined,
      annualIncome: c['Annual Income (k$)'] ? Number(c['Annual Income (k$)']) : undefined,
      spendingScore: c['Spending Score (1-100)'] ? Number(c['Spending Score (1-100)']) : undefined,
    }));

    await Customer.deleteMany();
    await Customer.insertMany(docs);

    res.json({ success: true, inserted: docs.length });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
};

const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find().limit(500);
    res.json({ success: true, data: customers });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = { seedCustomersFromCSV, getCustomers, createCustomerPurchase };
