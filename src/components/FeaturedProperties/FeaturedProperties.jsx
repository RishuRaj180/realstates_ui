import "./FeaturedProperties.css";

function FeaturedProperties() {
  return (
    <section className="featured">

      <h2>Featured Properties</h2>

      <div className="property-container">

        <div className="card">
          <h3>Luxury Villa</h3>
          <p>📍 Mumbai</p>
          <p>💰 ₹2.5 Crore</p>
          <button>View Details</button>
        </div>

        <div className="card">
          <h3>Modern Apartment</h3>
          <p>📍 Delhi</p>
          <p>💰 ₹85 Lakh</p>
          <button>View Details</button>
        </div>

        <div className="card">
          <h3>Premium Bungalow</h3>
          <p>📍 Bangalore</p>
          <p>💰 ₹1.8 Crore</p>
          <button>View Details</button>
        </div>

      </div>

    </section>
  );
}

export default FeaturedProperties;