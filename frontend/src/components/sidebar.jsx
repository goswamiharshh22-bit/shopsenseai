import {
  FaHome,
  FaUsers,
  FaBoxOpen,
  FaChartBar,
  FaRobot,
  FaCog,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

function Sidebar() {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: <FaHome />,
    },
    {
      name: "Customers",
      path: "/customers",
      icon: <FaUsers />,
    },
    {
      name: "Products",
      path: "/products",
      icon: <FaBoxOpen />,
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: <FaChartBar />,
    },
    {
      name: "AI Insights",
      path: "/insights",
      icon: <FaRobot />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <FaCog />,
    },
  ];

  return (
    <div className="sidebar">
      <h1 className="logo">ShopSense AI</h1>

      <ul className="menu">
        {menuItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                isActive ? "menu-link active" : "menu-link"
              }
            >
              <span className="icon">{item.icon}</span>
              <span>{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar; 