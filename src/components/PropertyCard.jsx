import "./PropertyCard.css";
import { useNavigate } from "react-router-dom";

function PropertyCard({
  id,
  title,
  image,
  location,
  price,
  property_type,
  bedrooms,
  bathrooms,
  description,
}) {

  const navigate = useNavigate();

  // Format price in Indian style
  const formattedPrice = Number(price).toLocaleString("en-IN");

  return (
    <div className="property-card">

      <img
        src={image}
        alt={title}
        className="property-image"
      />

      <span className="property-type-badge">
        {property_type}
      </span>

      <h3>{title}</h3>

      <p className="price">
        ₹ {formattedPrice}
      </p>

      <p>
        <strong>📍 Location:</strong> {location}
      </p>

      <p>
        <strong>🛏 Bedrooms:</strong> {bedrooms}
      </p>

      <p>
        <strong>🚿 Bathrooms:</strong> {bathrooms}
      </p>

      <p className="description">
        {description}
      </p>

      <button
        onClick={() => navigate(`/property/${id}`)}
      >
        View Details
      </button>

    </div>
  );
}

export default PropertyCard;