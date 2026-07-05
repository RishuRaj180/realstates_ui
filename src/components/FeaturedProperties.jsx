import "./FeaturedProperties.css";
import { useNavigate } from "react-router-dom";

function FeaturedProperties() {

  const navigate = useNavigate();

  return (
    <section className="featured">

      <h2>Featured Properties</h2>

      <div className="property-container">

        <div className="card">
          <h3>Luxury Villa</h3>
          <p>📍 Mumbai</p>
          <p>💰 ₹4.5 Crore</p>

          <button onClick={() => navigate("/property/1")}>
            View Details
          </button>
        </div>

        <div className="card">
          <h3>Modern Apartment</h3>
          <p>📍 Delhi</p>
          <p>💰 ₹85 Lakh</p>

          <button onClick={() => navigate("/property/2")}>
            View Details
          </button>
        </div>

        <div className="card">
          <h3>Premium Bungalow</h3>
          <p>📍 Bangalore</p>
          <p>💰 ₹1.8 Crore</p>

          <button onClick={() => navigate("/property/3")}>
            View Details
          </button>
        </div>

      </div>

    </section>
  );
}

export default FeaturedProperties;