const { generateInsights } = require("../services/geminiService");

const predictConsumer = async (req, res) => {
  try {
    const {
      age,
      gender,
      category,
      averageSpending,
      purchaseFrequency,
    } = req.body;

    const customerData = {
      age,
      gender,
      category,
      averageSpending,
      purchaseFrequency,
    };

    const report = await generateInsights(customerData);

    res.json({
      success: true,
      report,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  predictConsumer,
};