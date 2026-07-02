import "./Home.css";
import heroImage from "../assets/images/hero.jpg";
import PropertyCard from "../components/PropertyCard";

function Home() {
  const properties = [
    {
      title: "Luxury Villa",
      location: "Mumbai",
      price: "₹2.5 Crore",
    },
    {
      title: "Modern Apartment",
      location: "Delhi",
      price: "₹85 Lakh",
    },
    {
      title: "Premium Bungalow",
      location: "Bangalore",
      price: "₹1.8 Crore",
    },
  ];

  return (
    <section className="home">

      {/* Hero Section */}
      <div className="hero">

        <div className="hero-text">
          <h1>Find Your Dream Home</h1>

          <p>
            Buy, Sell and Rent Properties Easily with Our Real Estate
            Management System.
          </p>

          <button>Explore Properties</button>
        </div>

        <div className="hero-image">
          <img src={heroImage} alt="Luxury House" />
        </div>

      </div>

      {/* Featured Properties */}
      <div className="featured">

        <h2>Featured Properties</h2>

        <div className="property-list">

          {properties.map((property, index) => (
            <PropertyCard
              key={index}
              title={property.title}
              location={property.location}
              price={property.price}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Home;