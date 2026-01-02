import ProductCard from "./ProductCard";

function ProductGrid({ products, onEdit }) {
  if (products.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-8">No products found.</p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onEdit={onEdit} />
      ))}
    </div>
  );
}

export default ProductGrid;
