import "./BookVisit.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function BookVisit() {
  const { id } = useParams();
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [visitDate, setVisitDate] = useState("");
  const [visitTime, setVisitTime] = useState("");
  const [message, setMessage] = useState("");

const handleBookVisit = async () => {

  const username = localStorage.getItem("username");

  try {

    const response = await axios.post(
      "http://127.0.0.1:8000/api/book-visit/",
      {
        username: username,
        property_id: id,
        full_name: fullName,
        mobile: mobile,
        visit_date: visitDate,
        visit_time: visitTime,
        message: message,
      }
    );

    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }

  } catch (error) {

    console.error(error);
    toast.error("Something went wrong!");

  }

};

  return (
    <div className="book-visit-container">

      <div className="book-visit-card">

        <h1>Book Property Visit</h1>

        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <input
          type="date"
          value={visitDate}
          onChange={(e) => setVisitDate(e.target.value)}
        />

        <input
          type="time"
          value={visitTime}
          onChange={(e) => setVisitTime(e.target.value)}
        />

        <textarea
          placeholder="Message (Optional)"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button onClick={handleBookVisit}>
  Book Visit
</button>

      </div>

    </div>
  );
}

export default BookVisit;