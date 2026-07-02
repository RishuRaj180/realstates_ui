import "./Properties.css";
import PropertyCard from "../components/PropertyCard";

function Properties() {

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
    {
      title: "Beach House",
      location: "Goa",
      price: "₹4.2 Crore",
    },
    {
      title: "Penthouse",
      location: "Hyderabad",
      price: "₹3.8 Crore",
    },
    {
      title: "Farm House",
      location: "Pune",
      price: "₹1.5 Crore",
    },
  ];

  return (
    <section className="properties">

      <h1>All Properties</h1>

      <div className="property-grid">

        {properties.map((property, index) => (
          <PropertyCard
            key={index}
            title={property.title}
            location={property.location}
            price={property.price}
          />
        ))}

      </div>

    </section>
  );
}

export default Properties;