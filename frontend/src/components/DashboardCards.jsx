import { useEffect, useState } from "react";
import axios from "axios";

import {
  FaUsers,
  FaBox,
  FaShoppingCart,
  FaRupeeSign,
} from "react-icons/fa";

import Statcard from "./Statcard";

function DashboardCards() {
  const [dashboard, setDashboard] = useState({
    totalCustomers: 0,
    totalProducts: 0,
    totalSales: 0,
    totalRevenue: 0,
  });

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/ai`);

      );

      setDashboard(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="dashboard-cards">

      <Statcard
        title="Customers"
        value={dashboard.totalCustomers}
        bgClass="blue"
        icon={<FaUsers />}
      />

      <Statcard
        title="Products"
        value={dashboard.totalProducts}
        bgClass="green"
        icon={<FaBox />}
      />

      <Statcard
        title="Sales"
        value={dashboard.totalSales}
        bgClass="orange"
        icon={<FaShoppingCart />}
      />

      <Statcard
        title="Revenue"
        value={`₹${dashboard.totalRevenue}`}
        bgClass="purple"
        icon={<FaRupeeSign />}
      />

    </div>
  );
}

export default DashboardCards;