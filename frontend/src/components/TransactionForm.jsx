import { useState } from "react";
import "./TransactionForm.css";

export default function TransactionForm() {

  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    category: "",
    product: "",
    quantity: "",
    purchaseAmount: "",
    averageSpending: ""
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/customers/purchases`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to save the customer purchase.");
      }

      setStatus({ type: "success", message: data.message });
      setFormData({
        age: "", gender: "", category: "", product: "", quantity: "", purchaseAmount: "", averageSpending: "",
      });
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="transaction-container">

      <h2>Add Customer Purchase</h2>

      <form onSubmit={handleSubmit} className="transaction-form">

        <div className="form-group">
          <label>Customer Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            min="1"
            required
          />
        </div>

        <div className="form-group">
          <label>Gender</label>

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

        </div>

        <div className="form-group">

          <label>Category</label>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Groceries</option>
            <option>Sports</option>
            <option>Beauty</option>
            <option>Furniture</option>
          </select>

        </div>

        <div className="form-group">
          <label>Product Name</label>

          <input
            type="text"
            name="product"
            value={formData.product}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">

          <label>Quantity</label>

          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            min="1"
            required
          />

        </div>

        <div className="form-group">

          <label>Purchase Amount (₹)</label>

          <input
            type="number"
            name="purchaseAmount"
            value={formData.purchaseAmount}
            onChange={handleChange}
            min="0"
            required
          />

        </div>

        <div className="form-group">

          <label>Average Spending (₹)</label>

          <input
            type="number"
            name="averageSpending"
            value={formData.averageSpending}
            onChange={handleChange}
            min="0"
            required
          />

        </div>

        <button type="submit" disabled={submitting}>
          {submitting ? "Saving..." : "Save Customer"}
        </button>

        {status.message && (
          <p className={`form-status ${status.type}`} role="status">{status.message}</p>
        )}

      </form>

    </div>
  );
}
