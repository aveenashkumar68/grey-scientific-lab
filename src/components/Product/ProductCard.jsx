function ProductCard({ product, onEdit }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition">
      <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
      <p className="text-sm text-gray-500 mt-1">{product.category}</p>

      <div className="mt-3 space-y-1 text-sm text-gray-700">
        <p>
          <span className="font-medium">Price:</span> ₹{product.price}
        </p>
        <p>
          <span className="font-medium">Stock:</span> {product.stock ?? "—"}
        </p>
      </div>

      {product.description && (
        <p className="text-sm text-gray-600 mt-3 line-clamp-2">
          {product.description}
        </p>
      )}

      <button
        className="mt-4 text-sm text-blue-600 hover:underline"
        onClick={() => onEdit(product)}
      >
        Edit
      </button>
    </div>
  );
}

export default ProductCard;
