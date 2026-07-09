import {
  FaShoppingCart,
  FaUsers,
  FaDollarSign,
  FaBox,
} from "react-icons/fa";

const cards = [
  {
    title: "Revenue",
    value: "$12,500",
    icon: <FaDollarSign />,
    color: "#10B981",
  },
  {
    title: "Orders",
    value: "480",
    icon: <FaShoppingCart />,
    color: "#3B82F6",
  },
  {
    title: "Products",
    value: "132",
    icon: <FaBox />,
    color: "#F59E0B",
  },
  {
    title: "Customers",
    value: "890",
    icon: <FaUsers />,
    color: "#8B5CF6",
  },
];

export default function DashboardCards() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "20px",
      }}
    >
      {cards.map((card) => (
        <div
          key={card.title}
          style={{
            background: "#1F2937",
            borderRadius: "15px",
            padding: "25px",
          }}
        >
          <div
            style={{
              color: card.color,
              fontSize: "28px",
            }}
          >
            {card.icon}
          </div>

          <h3>{card.title}</h3>

          <h1>{card.value}</h1>
        </div>
      ))}
    </div>
  );
}