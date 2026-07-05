import { useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "../components/PropertyCard";
import SearchFilter from "../components/SearchFilter";
import "./Properties.css";

function Properties() {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState("");

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

  const filteredProperties = properties.filter((property) =>
    property.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="properties">

      <h1>All Properties</h1>

      <SearchFilter
        search={search}
        setSearch={setSearch}
      />

      <div className="property-grid">

        {filteredProperties.map((property) => (
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
  );
}

export default Properties;