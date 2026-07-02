import "./PropertyCard.css";

function PropertyCard({ title, location, price }) {
  return (
    <div className="property-card">
      <h3>{title}</h3>

      <p>📍 {location}</p>

      <p>💰 {price}</p>

      <button>View Details</button>
    </div>
  );
}

export default PropertyCard;