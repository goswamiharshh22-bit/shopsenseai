const Product = require("../models/Product");

const getAIInsights = async (req, res) => {
  try {
    const products = await Product.find();

    if (products.length === 0) {
      return res.json({
        success: true,
        insights: [
          "No products available.",
          "Please add products to generate AI insights."
        ]
      });
    }

    // Total Revenue
    const totalRevenue = products.reduce(
      (sum, p) => sum + p.price * p.quantity,
      0
    );

    // Best Selling Product
    const bestProduct = products.reduce((a, b) =>
      a.sales > b.sales ? a : b
    );

    // Category-wise Sales
    const categorySales = {};

    products.forEach((p) => {
      categorySales[p.category] =
        (categorySales[p.category] || 0) + p.sales;
    });

    const bestCategory = Object.keys(categorySales).reduce((a, b) =>
      categorySales[a] > categorySales[b] ? a : b
    );

    const insights = [
      `Total Revenue is ₹${totalRevenue.toLocaleString()}.`,
      `${bestCategory} is the highest-selling category.`,
      `${bestProduct.productName} is the best-selling product with ${bestProduct.sales} sales.`,
      "Increase stock for top-selling products.",
      "Offer discounts on low-selling products.",
      "Launch promotions in underperforming categories."
    ];

    res.json({
      success: true,
      insights
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

module.exports = {
  getAIInsights
};