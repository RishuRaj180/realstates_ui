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

  return (
    <div className="property-card">

      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      <h3>{title}</h3>

      <p><strong>Price:</strong> ₹ {price}</p>

      <p><strong>Location:</strong> {location}</p>

      <p><strong>Type:</strong> {property_type}</p>

      <p><strong>Bedrooms:</strong> {bedrooms}</p>

      <p><strong>Bathrooms:</strong> {bathrooms}</p>

      <p>{description}</p>

      <button
  onClick={() => {
    alert(`Property ID = ${id}`);
    navigate(`/property/${id}`);
  }}
>
  View Details
</button>

    </div>
  );
}

export default PropertyCard;