import { useEffect, useMemo, useState } from "react";
import initialProducts from "./data/initialProducts";
import Header from "./components/Header/Header";
import useDebounce from "./hooks/useDebounce";
import ProductList from "./components/Product/ProductList";
import ProductGrid from "./components/Product/ProductGrid";
import ProductForm from "./components/ProductForm/ProductForm";
import Pagination from "./components/Pagination/Pagination";
import paginate from "./utils/paginate";

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [viewMode, setViewMode] = useState("list");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const pageSize = 5;
  const debouncedSearch = useDebounce(searchQuery, 500);

  // Filter products based on debounced search
  const filteredProducts = useMemo(() => {
    if (!debouncedSearch.trim()) return products;

    return products.filter((product) =>
      product.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [products, debouncedSearch]);

  // Reset page when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch]);

  const paginatedProducts = useMemo(() => {
    return paginate(filteredProducts, currentPage, pageSize);
  }, [filteredProducts, currentPage]);

  // Add Product button
  function handleAddClick() {
    setEditingProduct(null);
    setIsFormOpen(true);
  }

  // Form submit for both Add & Edit
  function handleFormSubmit(formData) {
    if (editingProduct) {
      // Edit product
      setProducts((prev) =>
        prev.map((p) =>
          p.id === editingProduct.id
            ? { ...p, ...formData, price: Number(formData.price) }
            : p
        )
      );
    } else {
      // Add new product
      setProducts((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          ...formData,
          price: Number(formData.price)
        }
      ]);
    }

    setIsFormOpen(false);
    setEditingProduct(null);
  }

  // Edit button clicked
  function handleEditProduct(product) {
    setEditingProduct(product);
    setIsFormOpen(true);
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold text-gray-800">
            Product Management
          </h1>

          <button
            onClick={handleAddClick}
            className="px-4 py-2 bg-green-600 text-white rounded-lg"
          >
            Add Product
          </button>
        </div>

        <Header
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />

        {isFormOpen && (
          <ProductForm
            initialData={editingProduct}
            onSubmit={handleFormSubmit}
            onCancel={() => {
              setIsFormOpen(false);
              setEditingProduct(null);
            }}
          />
        )}

        {viewMode === "list" ? (
          <ProductList
            products={paginatedProducts}
            onEdit={handleEditProduct}
          />
        ) : (
          <ProductGrid
            products={paginatedProducts}
            onEdit={handleEditProduct}
          />
        )}

        <Pagination
          totalItems={filteredProducts.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default App;
