import CustomerTable from "../components/CustomerTable";
import TransactionForm from "../components/TransactionForm";

function Customers() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Customers</h1>
      <TransactionForm />
      <CustomerTable />
    </div>
  );
}

export default Customers;