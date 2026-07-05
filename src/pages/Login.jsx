import axios from "axios";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {

    setError("");

    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/api/login/",
        {
          username: username,
          password: password,
        }
      );

      if (response.data.success) {

    // Save login information
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", username);

    // Go to Home page
    navigate("/home");


      } else {

        setError(response.data.message);

      }

    } catch (error) {

      setError("Server Error!");

      console.log(error);

    }

  };

  return (
    <div className="login-container">

      <div className="login-box">

        <h1>Login</h1>
        <p>Welcome Back!</p>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p style={{ color: "red" }}>
            {error}
          </p>
        )}

        <button onClick={handleLogin}>
          Login
        </button>

        <p className="bottom-text">
          Don't have an account?
          <Link to="/register"> Sign Up</Link>
        </p>

      </div>

    </div>
  );
}

export default Login;