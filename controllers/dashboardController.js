const Product = require("../models/Product");
const Customer = require("../models/Customer");

const getDashboard = async (req, res) => {
  try {
    // Total Products
    const totalProducts = await Product.countDocuments();

    // Total Customers
    const totalCustomers = await Customer.countDocuments();

    // Total Sales
    const totalSales = await Product.aggregate([
      {
        $group: {
          _id: null,
          sales: {
            $sum: "$sales",
          },
        },
      },
    ]);

    // Total Revenue
    const totalRevenue = await Product.aggregate([
      {
        $group: {
          _id: null,
          revenue: {
            $sum: {
              $multiply: ["$price", "$quantity"],
            },
          },
        },
      },
    ]);

    // Top Products
    const topProducts = await Product.find()
      .sort({ sales: -1 })
      .limit(5);

    res.json({
      success: true,
      data: {
        totalProducts,
        totalCustomers,
        totalSales:
          totalSales.length > 0 ? totalSales[0].sales : 0,
        totalRevenue:
          totalRevenue.length > 0 ? totalRevenue[0].revenue : 0,
        topProducts,
      },
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  getDashboard,
};