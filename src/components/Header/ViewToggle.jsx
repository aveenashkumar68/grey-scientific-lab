function ViewToggle({ viewMode, onToggle }) {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => onToggle("list")}
        className={`px-4 py-2 rounded-lg border text-sm font-medium
          ${
            viewMode === "list"
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
      >
        List
      </button>

      <button
        onClick={() => onToggle("grid")}
        className={`px-4 py-2 rounded-lg border text-sm font-medium
          ${
            viewMode === "grid"
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
      >
        Grid
      </button>
    </div>
  );
}

export default ViewToggle;
