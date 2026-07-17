import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#fff",
        padding: "18px 30px",
        borderRadius: "15px",
        marginBottom: "25px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
      }}
    >
      <div>
        <h2>👋 Welcome Back!</h2>
        <p style={{ color: "#6b7280" }}>
          AI Consumer Behaviour Dashboard
        </p>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "25px",
          fontSize: "22px",
        }}
      >
        <FaSearch />
        <FaBell />
        <FaUserCircle size={34} />
      </div>
    </div>
  );
}

export default Navbar;