import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="notfound">

      <div className="notfound-box">

        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
          Oops! The page you are looking for doesn't exist or has been moved.
        </p>

        <Link to="/home">
          <button>🏠 Back to Home</button>
        </Link>

      </div>

    </div>
  );
}

export default NotFound;