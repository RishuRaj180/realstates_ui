import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}

        <div className="footer-section">

          <h2>🏠 Real Estate</h2>

          <p>
            Helping families find their dream homes with trust,
            transparency and quality.
          </p>

        </div>

        {/* Quick Links */}

        <div className="footer-section">

          <h3>Quick Links</h3>

          <Link to="/home">Home</Link>
          <Link to="/properties">Properties</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

        </div>

        {/* Contact */}

        <div className="footer-section">

          <h3>Contact</h3>

          <p>📍 Delhi, India</p>

          <a href="tel:+918797405838">
            📞 +91 8797405838
          </a>

          <a href="mailto:rishuraj113099@gmail.com">
            ✉️ rishuraj113099@gmail.com
          </a>

        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 Real Estate | Designed & Developed by <strong>Rishu Raj</strong>
      </p>

    </footer>
  );
}

export default Footer;