import "./Contact.css";

function Contact() {
  return (
    <div className="contact">

      <h1>📞 Contact Us</h1>

      <p className="contact-subtitle">
        We'd love to hear from you. Whether you're looking to buy, sell or
        rent a property, our team is here to help.
      </p>

      <div className="contact-container">

        {/* Left Side */}

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <p>
            Our experienced team is always ready to guide you through every
            step of your real estate journey.
          </p>

          <div className="info-box">
            <h3>📍 Office Address</h3>
            <p>Delhi, India</p>
          </div>

          <div className="info-box">
            <h3>📞 Phone</h3>

            <a href="tel:+918797405838">
              +91 8797405838
            </a>

          </div>

          <div className="info-box">
            <h3>📧 Email</h3>

            <a href="mailto:rishuraj113099@gmail.com">
              rishuraj113099@gmail.com
            </a>

          </div>

          <div className="info-box">
            <h3>🕒 Working Hours</h3>

            <p>Monday - Saturday</p>
            <p>9:00 AM - 6:00 PM</p>

          </div>

        </div>

        {/* Right Side */}

        <div className="contact-form">

          <h2>Send Message</h2>

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Phone Number"
          />

          <textarea
            rows="6"
            placeholder="Write Your Message..."
          ></textarea>

          <button>
            Send Message
          </button>

        </div>

      </div>

    </div>
  );
}

export default Contact;