import "./PropertyDetails.css";

function PropertyDetails() {
  return (
    <div className="property-details">

      <img
        src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
        alt="Property"
        className="property-image"
      />

      <div className="property-info">

        <h1>Luxury Villa</h1>

        <p className="price">
          ₹ 2,50,00,000
        </p>

        <div className="details">
          <p><strong>Location:</strong> Delhi</p>
          <p><strong>Type:</strong> Villa</p>
          <p><strong>Bedrooms:</strong> 4</p>
          <p><strong>Bathrooms:</strong> 3</p>
        </div>

        <div className="description">
          <h2>Description</h2>

          <p>
            Beautiful luxury villa with modern amenities,
            swimming pool, garden and parking.
          </p>
        </div>

        <button className="contact-btn">
          Contact Agent
        </button>

      </div>

    </div>
  );
}

export default PropertyDetails;