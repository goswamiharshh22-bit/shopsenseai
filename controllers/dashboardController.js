const Product = require("../models/Product");

const getDashboard = async (req, res) => {
  try {
    const totalProducts = await Product.countDocuments();

    const totalRevenue = await Product.aggregate([
      {
        $group: {
          _id: null,
          revenue: { $sum: "$sales" }
        }
      }
    ]);

    const topProducts = await Product.find()
      .sort({ sales: -1 })
      .limit(5);

    res.json({
      success: true,
      data: {
        totalProducts,
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