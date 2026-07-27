import "./About.css";

function About() {
  return (
    <div className="about">

      <h1>🏠 About Us</h1>

      <div className="about-section">

        <h2>Who We Are</h2>

        <p>
          Welcome to <strong>Real Estate</strong>, your trusted partner in
          buying, selling and renting properties. Our goal is to connect
          buyers, sellers and investors through a modern, transparent and
          reliable platform. We are committed to helping every customer find
          the perfect property with confidence.
        </p>

      </div>

      <div className="about-section">

        <h2>🎯 Our Mission</h2>

        <p>
          Our mission is to simplify the real estate journey by providing
          verified property listings, trusted agents, transparent pricing
          and excellent customer service. We strive to make every property
          transaction smooth, secure and hassle-free.
        </p>

      </div>

      <div className="about-section">

        <h2>🚀 Our Vision</h2>

        <p>
          Our vision is to become one of India's most trusted real estate
          platforms by using modern technology to create a smarter, faster
          and more transparent property marketplace for everyone.
        </p>

      </div>

      <div className="about-section">

        <h2>⭐ Why Choose Us?</h2>

        <ul>
          <li>✔ Verified & Trusted Properties</li>
          <li>✔ Experienced Real Estate Agents</li>
          <li>✔ Competitive Market Prices</li>
          <li>✔ Fast, Secure & Transparent Deals</li>
          <li>✔ Dedicated Customer Support</li>
        </ul>

      </div>

      <div className="stats">

        <div className="stat-box">
          <h2>1000+</h2>
          <p>Properties Listed</p>
        </div>

        <div className="stat-box">
          <h2>500+</h2>
          <p>Happy Clients</p>
        </div>

        <div className="stat-box">
          <h2>50+</h2>
          <p>Cities Covered</p>
        </div>

        <div className="stat-box">
          <h2>10+</h2>
          <p>Years of Experience</p>
        </div>

      </div>

    </div>
  );
}

export default About;