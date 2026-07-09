const products = [
  {
    name: "iPhone 15",
    sales: 250,
  },
  {
    name: "Nike Shoes",
    sales: 180,
  },
  {
    name: "Laptop",
    sales: 140,
  },
  {
    name: "Headphones",
    sales: 120,
  },
];

export default function TopProducts() {
  return (
    <div
      style={{
        background: "#1F2937",
        borderRadius: "15px",
        padding: "25px",
        flex: 1,
      }}
    >
      <h2
        style={{
          color: "white",
          marginBottom: "20px",
        }}
      >
        Top Products
      </h2>

      <table
        style={{
          width: "100%",
          color: "white",
        }}
      >
        <thead>
          <tr>
            <th align="left">Product</th>
            <th align="right">Sales</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p.name}>
              <td>{p.name}</td>
              <td align="right">{p.sales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}