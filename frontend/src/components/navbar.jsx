import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <div
      style={{
        background: "#1F2937",
        padding: "15px 25px",
        borderRadius: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "30px",
      }}
    >
      {/* Search Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "#374151",
          padding: "10px 15px",
          borderRadius: "10px",
          width: "350px",
        }}
      >
        <FaSearch color="#9CA3AF" />

        <input
          type="text"
          placeholder="Search..."
          style={{
            marginLeft: "10px",
            border: "none",
            outline: "none",
            background: "transparent",
            color: "white",
            width: "100%",
          }}
        />
      </div>

      {/* Right Side */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "25px",
        }}
      >
        <FaBell
          color="white"
          size={20}
          style={{ cursor: "pointer" }}
        />

        <FaUserCircle color="#8B5CF6" size={35} />

        <span style={{ color: "white" }}>
          Harsh
        </span>
      </div>
    </div>
  );
}

export default Navbar;