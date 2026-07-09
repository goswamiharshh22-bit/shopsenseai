import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", sales: 400 },
  { month: "Feb", sales: 600 },
  { month: "Mar", sales: 800 },
  { month: "Apr", sales: 700 },
  { month: "May", sales: 1200 },
  { month: "Jun", sales: 900 },
];

export default function SalesChart() {
  return (
    <div
      style={{
        background: "#1F2937",
        marginTop: "30px",
        borderRadius: "15px",
        padding: "25px",
      }}
    >
      <h2 style={{ color: "white", marginBottom: "20px" }}>
        Monthly Sales
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <CartesianGrid stroke="#374151" />

          <XAxis dataKey="month" stroke="white" />

          <YAxis stroke="white" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="sales"
            stroke="#8B5CF6"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}