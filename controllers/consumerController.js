const Consumer = require("../models/Consumer");

const products = [
  "iPhone 15",
  "Samsung S24",
  "Nike Shoes",
  "Adidas T-Shirt",
  "Laptop",
  "Headphones",
  "Smart Watch",
  "Backpack",
  "Coffee Maker",
  "Gaming Mouse"
];

const categories = [
  "Electronics",
  "Fashion",
  "Electronics",
  "Fashion",
  "Electronics",
  "Accessories",
  "Accessories",
  "Bags",
  "Home",
  "Accessories"
];

const cities = [
  "Delhi",
  "Mumbai",
  "Lucknow",
  "Bangalore",
  "Hyderabad",
  "Pune",
  "Jaipur",
  "Kolkata"
];

exports.seedData = async (req, res) => {
  try {

    await Consumer.deleteMany();

    let data = [];

    for (let i = 1; i <= 1000; i++) {

      const random = Math.floor(Math.random() * products.length);

      data.push({
        customerId: "CUS" + i,
        age: Math.floor(Math.random() * 40) + 18,
        gender: Math.random() > 0.5 ? "Male" : "Female",
        city: cities[Math.floor(Math.random() * cities.length)],
        product: products[random],
        category: categories[random],
        quantity: Math.floor(Math.random() * 5) + 1,
        price: Math.floor(Math.random() * 50000) + 500,
        purchaseDate: new Date(
          2025,
          Math.floor(Math.random() * 12),
          Math.floor(Math.random() * 28) + 1
        )
      });

    }

    await Consumer.insertMany(data);

    res.json({
      success: true,
      message: "1000 Consumer Records Inserted"
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};