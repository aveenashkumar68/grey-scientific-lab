function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full md:w-72 px-4 py-2 border rounded-lg 
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}

export default SearchBar;
