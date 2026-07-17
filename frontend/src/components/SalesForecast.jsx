import { FaChartLine } from "react-icons/fa";

function SalesForecast() {
  const currentSales = 490;

  // Simple prediction logic
  const predictedSales = Math.round(currentSales * 1.15);
  const growth = (
    ((predictedSales - currentSales) / currentSales) *
    100
  ).toFixed(1);

  return (
    <div
      className="card"
      style={{
        marginTop: "25px",
        padding: "25px",
      }}
    >
      <h2>
        <FaChartLine color="#2563eb" /> AI Sales Forecast
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            background: "#eff6ff",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <h3>Current Sales</h3>
          <h1>{currentSales}</h1>
        </div>

        <div
          style={{
            background: "#dcfce7",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <h3>Predicted Sales</h3>
          <h1>{predictedSales}</h1>
        </div>

        <div
          style={{
            background: "#fef3c7",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <h3>Expected Growth</h3>
          <h1>{growth}%</h1>
        </div>
      </div>
    </div>
  );
}

export default SalesForecast;