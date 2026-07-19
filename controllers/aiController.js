const Product = require("../models/Product");
const Customer = require("../models/Customer");
const { generateInsights } = require("../services/geminiService");

const getAIInsights = async (req, res) => {
  console.log("✅ AI endpoint hit");

  try {
    const [products, customers] = await Promise.all([
      Product.find(),
      Customer.find({ "purchases.0": { $exists: true } }),
    ]);

    if (products.length === 0 && customers.length === 0) {
      return res.json({
        success: true,
        insight: "No sales data available. Add a product or save a customer purchase first.",
      });
    }

    // Calculate Total Revenue
    const totalRevenue = products.reduce(
      (sum, p) => sum + p.price * p.quantity,
      0
    );

    // Calculate Total Sales
    const totalSales = products.reduce(
      (sum, p) => sum + p.sales,
      0
    );

    // Best Selling Product
    const bestProduct = products.length
      ? products.reduce((a, b) => (a.sales > b.sales ? a : b))
      : null;

    // Category-wise Sales
    const categorySales = {};

    products.forEach((product) => {
      categorySales[product.category] =
        (categorySales[product.category] || 0) + product.sales;
    });

    // Best Category
    const bestCategory = Object.keys(categorySales).length
      ? Object.keys(categorySales).reduce((a, b) =>
        categorySales[a] > categorySales[b] ? a : b
      )
      : "No inventory data";

    const purchases = customers.flatMap((customer) =>
      customer.purchases.map((purchase) => ({
        customerAge: customer.age,
        gender: customer.gender,
        averageSpending: customer.averageSpending,
        ...purchase.toObject(),
      }))
    );
    const purchaseRevenue = purchases.reduce((sum, purchase) => sum + purchase.amount, 0);

    // Prepare data for OpenAI
    const analyticsData = {
      totalProducts: products.length,
      totalSales,
      totalRevenue: totalRevenue + purchaseRevenue,
      bestCategory,
      bestSellingProduct: bestProduct?.productName || "No inventory data",
      bestSellingProductSales: bestProduct?.sales || 0,
      categorySales,
      customerPurchaseCount: purchases.length,
      customerPurchaseRevenue: purchaseRevenue,
      recentCustomerPurchases: purchases.slice(-50),
      products: products.map((p) => ({
        productName: p.productName,
        category: p.category,
        price: p.price,
        quantity: p.quantity,
        sales: p.sales,
      })),
    };

    // Generate AI Insights
    console.log("Calling Gemini...");

const aiInsight = await generateInsights(analyticsData);

console.log("Gemini Response:");
console.log(aiInsight);

    res.status(200).json({
      success: true,
      insight: aiInsight,
      analytics: analyticsData,
    });

  } catch (err) {
    console.error("AI Controller Error:", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  getAIInsights,
};
