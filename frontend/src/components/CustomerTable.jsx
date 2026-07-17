import { useEffect, useState } from "react";
import axios from "axios";

function CustomerTable() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/consumer");
      setCustomers(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="card">
      <h2>👥 Customer Management</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr style={{ background: "#2563eb", color: "white" }}>
            <th style={{ padding: "12px" }}>Age</th>
            <th>Gender</th>
            <th>Category</th>
            <th>Average Spending</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <tr key={customer._id}>
              <td style={{ padding: "12px" }}>{customer.age}</td>
              <td>{customer.gender}</td>
              <td>{customer.category}</td>
              <td>₹ {customer.averageSpending}</td>

              <td>
                <button>👁</button>

                <button
                  style={{ marginLeft: "8px" }}
                >
                  ✏
                </button>

                <button
                  style={{ marginLeft: "8px" }}
                >
                  🗑
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerTable;