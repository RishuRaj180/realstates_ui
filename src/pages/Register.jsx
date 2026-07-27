import "./Register.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = async () => {

    if (!name || !username || !email || !mobile || !state || !city || !gender || !password || !confirmPassword) {
      toast.error("Please fill all fields!");
      return;
    }

    if (!/^[A-Za-z ]+$/.test(name)) {
      toast.error("Name should contain only alphabets!");
      return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
      toast.error("Mobile number must be exactly 10 digits!");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/api/register/",
        {
          name,
          username,
          email,
          mobile,
          state,
          city,
          gender,
          password,
        }
      );

      if (response.data.success) {

        toast.success(response.data.message);
        navigate("/");

      } else {

        toast.error(response.data.message);

      }

    } catch (error) {

      console.log(error);
      toast.error("Something went wrong!");

    }

  };

  return (
    <div className="register-container">

      <div className="register-box">

        <h1>Create Account</h1>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => {
            const value = e.target.value;
            if (/^[A-Za-z ]*$/.test(value)) {
              setName(value);
            }
          }}
        />

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => {
            const value = e.target.value;
            if (/^\d{0,10}$/.test(value)) {
              setMobile(value);
            }
          }}
        />

        <input
          type="text"
          placeholder="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />

        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <div className="gender-container">
          <label>
            <input
              type="radio"
              value="Male"
              checked={gender === "Male"}
              onChange={(e) => setGender(e.target.value)}
            />
            Male
          </label>

          <label style={{ marginLeft: "20px" }}>
            <input
              type="radio"
              value="Female"
              checked={gender === "Female"}
              onChange={(e) => setGender(e.target.value)}
            />
            Female
          </label>
        </div>

        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <div className="password-container">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button
            type="button"
            onClick={() =>
              setShowConfirmPassword(!showConfirmPassword)
            }
          >
            {showConfirmPassword ? "Hide" : "Show"}
          </button>
        </div>

        <button onClick={handleRegister}>
          Create Account
        </button>

        <p className="bottom-text">
          Already have an account?{" "}
          <Link to="/">Login</Link>
        </p>

      </div>

    </div>
  );
}

export default Register;