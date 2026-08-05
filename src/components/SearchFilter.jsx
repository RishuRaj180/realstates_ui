import "./SearchFilter.css";

function SearchFilter({
  search,
  setSearch,
  location,
  setLocation,
  propertyType,
  setPropertyType,
  priceRange,
  setPriceRange,
  onSearch,
}) {
  return (
    <div className="search-filter">

      <input
        type="text"
        placeholder="🔍 Search Property..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      >
        <option value="">All Locations</option>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Bangalore">Bangalore</option>
      </select>

      <select
        value={propertyType}
        onChange={(e) => setPropertyType(e.target.value)}
      >
        <option value="">All Types</option>
        <option value="House">House</option>
        <option value="Apartment">Apartment</option>
        <option value="Villa">Villa</option>
        <option value="Land">Land</option>
        <option value="Bungalow">Bungalow</option>
        <option value="Penthouse">Penthouse</option>
        <option value="Farm House">Farm House</option>
      </select>

      <select
        value={priceRange}
        onChange={(e) => setPriceRange(e.target.value)}
      >
        <option value="">All Prices</option>
        <option value="below50">Below ₹50 Lakh</option>
        <option value="50to100">₹50 Lakh - ₹1 Crore</option>
        <option value="100to200">₹1 Crore - ₹2 Crore</option>
        <option value="above200">Above ₹2 Crore</option>
      </select>

      <button onClick={onSearch}>
      Search
      </button>

    </div>
  );
}

export default SearchFilter;