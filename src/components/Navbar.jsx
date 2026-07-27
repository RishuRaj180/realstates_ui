import { NavLink, useNavigate } from "react-router-dom";
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

  <li>
    <NavLink to="/home">
      Home
    </NavLink>
  </li>

  <li>
    <NavLink to="/properties">
      Properties
    </NavLink>
  </li>

  <li>
    <NavLink to="/about">
      About
    </NavLink>
  </li>

  <li>
    <NavLink to="/contact">
      Contact
    </NavLink>
  </li>

  <li>
    <NavLink to="/profile">
      Profile
    </NavLink>
  </li>

  <li>
  <NavLink to="/change-password">
    Change Password
  </NavLink>
  </li>

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