import SalesChart from "../components/SalesChart";
import CategoryChart from "../components/CategoryChart";
import SalesForecast from "../components/SalesForecast";

function Analytics() {
  return (
    <>
      <h1>Analytics</h1>

      <div className="card">
        <h2>Business Analytics</h2>
        <p>
          Sales reports, trends, charts and forecasting will be shown here.
        </p>
      </div>

      <SalesChart />
      <CategoryChart />
      <SalesForecast />
    </>
  );
}

export default Analytics;