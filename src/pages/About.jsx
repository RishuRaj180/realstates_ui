import "./About.css";

function About() {
  return (
    <div className="about">

      <h1>About Us</h1>

      <div className="about-section">

        <h2>Who We Are</h2>

        <p>
          Welcome to <strong>Real Estate</strong>, your trusted partner in
          buying, selling and renting properties. We are committed to helping
          people find their dream homes with verified listings, transparent
          pricing and professional support.
        </p>

      </div>

      <div className="about-section">

        <h2>Our Mission</h2>

        <p>
          Our mission is to simplify the property buying and selling process by
          providing reliable listings, trusted agents and excellent customer
          service.
        </p>

      </div>

      <div className="about-section">

        <h2>Our Vision</h2>

        <p>
          We aim to become one of India's most trusted real estate platforms by
          connecting buyers, sellers and investors through modern technology.
        </p>

      </div>

      <div className="about-section">

        <h2>Why Choose Us?</h2>

        <ul>
          <li>✔ Verified Properties</li>
          <li>✔ Trusted Real Estate Agents</li>
          <li>✔ Best Market Prices</li>
          <li>✔ Fast & Secure Deals</li>
          <li>✔ 24/7 Customer Support</li>
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
          <p>Years Experience</p>
        </div>

      </div>

    </div>
  );
}

export default About;