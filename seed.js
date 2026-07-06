require("dotenv").config();

const mongoose = require("mongoose");
const Product = require("./models/Product");

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB Connected");

    await Product.deleteMany();

    const products = [
      {
        name: "iPhone 15",
        category: "Electronics",
        price: 79999,
        sales: 120,
        stock: 40
      },
      {
        name: "Samsung TV",
        category: "Electronics",
        price: 54999,
        sales: 75,
        stock: 20
      },
      {
        name: "Nike Shoes",
        category: "Fashion",
        price: 6999,
        sales: 180,
        stock: 80
      },
      {
        name: "Apple Watch",
        category: "Wearables",
        price: 39999,
        sales: 65,
        stock: 30
      },
      {
        name: "Laptop",
        category: "Computers",
        price: 89999,
        sales: 50,
        stock: 15
      }
    ];

    await Product.insertMany(products);

    console.log("✅ Products inserted successfully");

    process.exit();
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });