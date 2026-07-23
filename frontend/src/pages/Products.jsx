import ProductTable from "../components/ProductTable";

function Products() {
  return (
    <>
      <h1>Products</h1>

      <div className="card">
        <h2>Product Management</h2>
        <p>
          Here you can display all products, inventory, stock status and sales.
        </p>
      </div>

      <ProductTable />
    </>
  );
}

export default Products;