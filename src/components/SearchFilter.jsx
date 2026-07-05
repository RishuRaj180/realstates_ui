import "./SearchFilter.css";

function SearchFilter({ search, setSearch }) {
  return (
    <div className="search-filter">

      <input
        type="text"
        placeholder="🔍 Search Property..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select>
        <option>All Locations</option>
        <option>Delhi</option>
        <option>Mumbai</option>
        <option>Bangalore</option>
      </select>

      <select>
        <option>All Types</option>
        <option>House</option>
        <option>Apartment</option>
        <option>Villa</option>
        <option>Land</option>
      </select>

      <select>
        <option>Price Range</option>
        <option>Below ₹50 Lakh</option>
        <option>₹50L - ₹1Cr</option>
        <option>₹1Cr - ₹3Cr</option>
        <option>Above ₹3Cr</option>
      </select>

      <button>
        Search
      </button>

    </div>
  );
}

export default SearchFilter;