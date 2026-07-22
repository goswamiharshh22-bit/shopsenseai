import {useState, useEffect} from 'react';
function ProductTable() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch product data from the backend API
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
        <div className="bg-white p-4 rounded-lg shadow p-6 mt-8">
            <h2 className="text-xl font-semibold mb-4">Top Selling Products</h2>

               <table className="min-w-full"> 
                <thead>
                    <tr className="border-b">
                        <th className="text-left py-2">Product</th>
                        <th className="text-left py-2">Category</th>
                        <th className="text-left py-2">Sales</th>
                        <th className="text-left py-2">Price</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((item, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="py-3">{item.product}</td>
                            <td>{item.category}</td>
                            <td>{item.sales}</td>
                            <td>{item.price}</td>
                        </tr>   
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductTable;
                             