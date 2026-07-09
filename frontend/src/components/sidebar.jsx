import {
  FaChartPie,
  FaBox,
  FaUsers,
  FaChartLine,
  FaRobot,
  FaCog
} from "react-icons/fa";

import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

      <h2 className="logo">
        ShopSense AI
      </h2>

      <ul>

       <li className="active">
  <FaChartPie />
  Dashboard
</li>

        <li>
          <FaBox />
          Products
        </li>

        <li>
          <FaUsers />
          Consumers
        </li>

        <li>
          <FaChartLine />
          Trends
        </li>

        <li>
          <FaRobot />
          AI Insights
        </li>

        <li>
          <FaCog />
          Settings
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;