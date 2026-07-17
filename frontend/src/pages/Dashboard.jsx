import DashboardCards from "../components/DashboardCards";
import SalesChart from "../components/SalesChart";
import CategoryChart from "../components/CategoryChart";
import TopProducts from "../components/TopProducts";
import TransactionForm from "../components/TransactionForm";
import AIInsights from "../components/AIInsights";
import SalesForecast from "../components/SalesForecast";

function Dashboard() {
  return (
    <>
      <h1>✌️ Welcome Back Buddy!</h1>
<p className="subtitle">
    Consumer Behaviour Analytics Dashboard
  </p>
      <DashboardCards />

      <div className="charts">
        <SalesChart />
        <CategoryChart />
      </div>

      <TopProducts />

      <TransactionForm />

      <AIInsights />

      <SalesForecast />
    </>
  );
}

export default Dashboard; 