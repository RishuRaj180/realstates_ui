import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div>
          <h2>Real Estate</h2>
          <p>
            Helping families find their dream homes with trust and quality.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <p>Home</p>
          <p>Properties</p>
          <p>About</p>
          <p>Contact</p>
        </div>

        <div>
          <h3>Contact</h3>

          <p>📍 Delhi, India</p>
          <p>📞 +91 8797405838</p>
          <p>✉ rishuraj113099@gmail.com</p>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 Real Estate. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;