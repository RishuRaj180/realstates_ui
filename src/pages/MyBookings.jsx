import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./MyBookings.css";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const username = localStorage.getItem("username");

    axios
      .post("http://127.0.0.1:8000/api/my-bookings/", {
        username: username,
      })
      .then((response) => {
        if (response.data.success) {
          setBookings(response.data.bookings);
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong!");
      });
  }, []);

  const cancelBooking = async (bookingId) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/cancel-booking/",
        {
          booking_id: bookingId,
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);

        setBookings(
          bookings.filter((booking) => booking.id !== bookingId)
        );
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="my-bookings-container">
      <div className="my-bookings-card">
        <h1>My Bookings</h1>

        {bookings.length === 0 ? (
          <p>No bookings found.</p>
        ) : (
          bookings.map((booking) => (
            <div key={booking.id} className="booking-item">
              <img
                src={booking.property_image}
                alt={booking.property_title}
                className="booking-image"
              />

              <div className="booking-details">
                <h2>{booking.property_title}</h2>

                <p>
                  <strong>Location:</strong> {booking.location}
                </p>

                <p>
                  <strong>Price:</strong> ₹
                  {Number(booking.price).toLocaleString("en-IN")}
                </p>

                <p>
                  <strong>Visit Date:</strong> {booking.visit_date}
                </p>

                <p>
                  <strong>Visit Time:</strong> {booking.visit_time}
                </p>

                <p>
                  <strong>Message:</strong>{" "}
                  {booking.message || "No message"}
                </p>

                <button
                  onClick={() => cancelBooking(booking.id)}
                  className="cancel-btn"
                >
                  Cancel Booking
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MyBookings;