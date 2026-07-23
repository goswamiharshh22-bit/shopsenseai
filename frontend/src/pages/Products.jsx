import { useState, useEffect } from 'react';

function ProductTable() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/api/products`)
            .then((response) => response.json())
            .then((result) => {
                if (result.success) {
                    setProducts(result.data);
                }
            })
            .catch((error) => {
                console.error('Error fetching product data:', error);
            });
    }, []);

    return (
        <div className="card" style={{ marginTop: '25px', padding: '25px' }}>
            <h2 style={{ marginBottom: '20px' }}>Top Selling Products</h2>

            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ background: '#2563eb', color: 'white' }}>
                        <th style={{ padding: '12px', textAlign: 'left' }}>Product</th>
                        <th style={{ padding: '12px', textAlign: 'left' }}>Category</th>
                        <th style={{ padding: '12px', textAlign: 'left' }}>Sales</th>
                        <th style={{ padding: '12px', textAlign: 'left' }}>Price</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((item, index) => (
                        <tr
                            key={index}
                            style={{
                                borderBottom: '1px solid #e5e7eb',
                                background: index % 2 === 0 ? '#ffffff' : '#f9fafb',
                            }}
                        >
                            <td style={{ padding: '12px' }}>{item.productName || item.product}</td>
                            <td style={{ padding: '12px' }}>{item.category}</td>
                            <td style={{ padding: '12px' }}>{item.sales}</td>
                            <td style={{ padding: '12px' }}>₹ {item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductTable;