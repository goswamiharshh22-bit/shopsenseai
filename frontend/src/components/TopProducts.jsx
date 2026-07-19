import { useEffect, useState } from "react";
import axios from "axios";

function TopProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchTopProducts();
  }, []);

  const fetchTopProducts = async () => {
    try {
      const res = await axios.get("http://https://shopsenseai-tjcz.onrender.com/api/dashboard");
      setProducts(res.data.data.topProducts);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="card" style={{ marginTop: "25px" }}>
      <h2 style={{ marginBottom: "20px" }}>🏆 Top Selling Products</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr style={{ background: "#f5f5f5" }}>
            <th style={{ padding: "12px" }}>Product</th>
            <th style={{ padding: "12px" }}>Category</th>
            <th style={{ padding: "12px" }}>Sales</th>
            <th style={{ padding: "12px" }}>Price</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td style={{ padding: "12px" }}>{product.productName}</td>
              <td style={{ padding: "12px" }}>{product.category}</td>
              <td style={{ padding: "12px" }}>{product.sales}</td>
              <td style={{ padding: "12px" }}>₹{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TopProducts;