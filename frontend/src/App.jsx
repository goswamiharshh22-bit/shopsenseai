import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#111827",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          marginLeft: "250px",
          padding: "30px",
        }}
      >
        <Dashboard />
      </div>
    </div>
  );
}

export default App;