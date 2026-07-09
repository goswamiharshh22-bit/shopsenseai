import Navbar from "../components/Navbar";
import DashboardCards from "../components/DashboardCards";
import SalesChart from "../components/SalesChart";
import CategoryChart from "../components/CategoryChart";
import TopProducts from "../components/TopProducts";

function Dashboard() {
  return (
    <>
      <Navbar />

      <h1
        style={{
          color: "white",
          marginTop: "20px",
        }}
      >
        Dashboard
      </h1>

      <p
        style={{
          color: "#9CA3AF",
          marginBottom: "30px",
        }}
      >
        Consumer Behavior Analytics Overview
      </p>

      <DashboardCards />

      <SalesChart />

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <CategoryChart />

        <TopProducts />
      </div>
    </>
  );
}

export default Dashboard;