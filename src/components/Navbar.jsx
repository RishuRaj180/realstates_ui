import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");

    navigate("/");
  };

  return (
    <nav className="navbar">

      <h1>Real Estate</h1>

      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/properties">Properties</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>

        <li>
          <button onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;