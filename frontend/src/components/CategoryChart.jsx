import { useEffect, useState } from "react";
import axios from "axios";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function CategoryChart() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategorySales();
  }, []);

  const fetchCategorySales = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/ai`);

      const formattedData = res.data.categorySales.map((item) => ({
        category: item._id,
        sales: item.totalSales,
      }));

      setCategories(formattedData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className="card"
      style={{
        height: "420px",
      }}
    >
      <h2
        style={{
          marginBottom: "20px",
        }}
      >
        Category Sales
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={categories}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="category" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="sales"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CategoryChart;