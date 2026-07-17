 import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function SalesChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/trends')
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          const formattedData = result.categorySales.map((item) => ({
            name: item._id,
            sales: item.totalSales,
          }));

          setData(formattedData);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow mt-8">
      <h2 className="text-xl font-semibold mb-4">
        Sales by Category
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="sales"
            stroke="#2563eb"
            strokeWidth={3}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesChart;