import "./Home.css";
import heroImage from "../assets/images/hero.jpg";
import PropertyCard from "../components/PropertyCard";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/properties/")
      .then((response) => {
        setProperties(response.data.properties);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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

          {properties.slice(0, 3).map((property) => (
            <PropertyCard
              key={property.id}
              id={property.id}
              title={property.title}
              image={property.image}
              location={property.location}
              price={property.price}
              property_type={property.property_type}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              description={property.description}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Home;