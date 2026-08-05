import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";
import "./PropertyDetails.css";

function PropertyDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [property, setProperty] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/properties/${id}/`)
      .then((response) => {
        setProperty(response.data.property);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!property) {
    return <LoadingSpinner />;
  }

  const handleContactAgent = () => {

    const message =
      `Hello,\n\n` +
      `I am interested in the property "${property.title}".\n\n` +
      `Property Location: ${property.location}\n` +
      `Price: ₹${property.price}\n\n` +
      `Could you please provide more details?\n\n` +
      `Thank you.`;

    window.open(
      `https://wa.me/918797405838?text=${encodeURIComponent(message)}`,
      "_blank"
    );

  };
  const handleBookVisit = () => {
  navigate(`/book-visit/${property.id}`);
  };

  return (
    <div className="property-details">

      <img
        src={property.image}
        alt={property.title}
        className="property-image"
      />

      <div className="property-info">

        <h1>{property.title}</h1>

        <p className="price">
          ₹ {Number(property.price).toLocaleString("en-IN")}
        </p>

        <div className="details">
          <p><strong>Location:</strong> {property.location}</p>
          <p><strong>Type:</strong> {property.property_type}</p>
          <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
          <p><strong>Bathrooms:</strong> {property.bathrooms}</p>
        </div>

        <div className="description">
          <h2>Description</h2>
          <p>{property.description}</p>
        </div>

        <div className="contact-buttons">

          <button
  className="book-visit-btn"
  onClick={handleBookVisit}
>
  📅 Book Property Visit
</button>

  <button
    className="whatsapp-btn"
    onClick={handleContactAgent}
  >
    💬 Contact on WhatsApp
  </button>

  <a
    href={`mailto:rishuraj113099@gmail.com?subject=Property Inquiry - ${property.title}`}
    className="email-btn"
  >
    📧 Email Agent
  </a>

</div>

      </div>

    </div>
  );
}

export default PropertyDetails;