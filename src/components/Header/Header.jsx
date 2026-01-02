import SearchBar from "./SearchBar";
import ViewToggle from "./ViewToggle";

function Header({ searchQuery, setSearchQuery, viewMode, setViewMode }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <ViewToggle viewMode={viewMode} onToggle={setViewMode} />
      </div>
    </div>
  );
}

export default Header;
