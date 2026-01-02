function ProductList({ products, onEdit }) {
  if (products.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-8">No products found.</p>
    );
  }

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-50 text-gray-700">
          <tr>
            <th className="px-4 py-3 text-left">Name</th>
            <th className="px-4 py-3 text-left">Category</th>
            <th className="px-4 py-3 text-left">Price</th>
            <th className="px-4 py-3 text-left">Stock</th>
            <th className="px-4 py-3 text-left">Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className="border-t hover:bg-gray-50"
            >
              <td className="px-4 py-3">{product.name}</td>
              <td className="px-4 py-3">{product.category}</td>
              <td className="px-4 py-3">₹{product.price}</td>
              <td className="px-4 py-3">{product.stock ?? "—"}</td>
              <td className="px-4 py-3">
                <button
                  className="text-blue-600 hover:underline"
                  onClick={() => onEdit(product)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
