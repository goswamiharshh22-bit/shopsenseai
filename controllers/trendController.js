const Product = require("../models/Product");

const getTrends = async (req, res) => {
  try {

    // Sales by Category
    const categorySales = await Product.aggregate([
      {
        $group: {
          _id: "$category",
          totalSales: {
            $sum: "$sales"
          }
        }
      }
    ]);

    // Revenue by Category
    const revenue = await Product.aggregate([
      {
        $group: {
          _id: "$category",
          revenue: {
            $sum: {
              $multiply: ["$price", "$quantity"]
            }
          }
        }
      }
    ]);

    res.json({
      success: true,
      categorySales,
      revenue
    });

  } catch (err) {

    res.status(500).json({
      success:false,
      message:err.message
    });

  }
};

module.exports = {
  getTrends
};