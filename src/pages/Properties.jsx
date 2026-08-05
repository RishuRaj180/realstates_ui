import { useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "../components/PropertyCard";
import SearchFilter from "../components/SearchFilter";
import LoadingSpinner from "../components/LoadingSpinner";
import "./Properties.css";

function Properties() {

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const fetchProperties = () => {

    setLoading(true);

    axios
      .get(
        `http://127.0.0.1:8000/api/properties/?search=${search}&location=${location}&property_type=${propertyType}&price_range=${priceRange}`
      )
      .then((response) => {
        setProperties(response.data.properties);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });

  };

  useEffect(() => {
    fetchProperties();
  }, []);

  useEffect(() => {
    fetchProperties();
  }, [location, propertyType, priceRange]);

  return (
    <div className="properties">

      <h1>All Properties</h1>

      <SearchFilter
        search={search}
        setSearch={setSearch}
        location={location}
        setLocation={setLocation}
        propertyType={propertyType}
        setPropertyType={setPropertyType}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        onSearch={fetchProperties}
      />

      {loading ? (

        <LoadingSpinner />

      ) : properties.length === 0 ? (

        <div style={{ textAlign: "center", marginTop: "60px" }}>
          <h2>😔 No Properties Found</h2>
          <p>Try changing your search or filters.</p>
        </div>

      ) : (

        <div className="property-grid">

          {properties.map((property) => (
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

      )}

    </div>
  );
}

export default Properties;