
const consumerRoutes = require("./routes/consumerRoutes");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dashboardRoutes = require("./routes/dashboardRoutes");
const productRoutes = require("./routes/productRoutes");
const customerRoutes = require("./routes/customerRoutes");
const trendRoutes = require("./routes/trendRoutes");
const aiRoutes = require("./routes/aiRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "ShopSense AI Backend Running"
  });
});
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/products", productRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/trends", trendRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/consumer", consumerRoutes);
module.exports = app;