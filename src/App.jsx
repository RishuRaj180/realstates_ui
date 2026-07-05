import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import PropertyDetails from "./pages/PropertyDetails";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Properties from "./pages/Properties";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Routes>

        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Register */}
        <Route path="/register" element={<Register />} />

        {/* Home */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Navbar />
              <Home />
              <Footer />
            </ProtectedRoute>
          }
        />

        {/* Properties */}
        <Route
          path="/properties"
          element={
            <ProtectedRoute>
              <Navbar />
              <Properties />
              <Footer />
            </ProtectedRoute>
          }
        />

        {/* About */}
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <Navbar />
              <About />
              <Footer />
            </ProtectedRoute>
          }
        />

        {/* Contact */}
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Navbar />
              <Contact />
              <Footer />
            </ProtectedRoute>
          }
        />

        {/* Property Details */}
        <Route
          path="/property/:id"
          element={
            <ProtectedRoute>
              <Navbar />
              <PropertyDetails />
              <Footer />
            </ProtectedRoute>
          }
        />

      </Routes>
    </>
  );
}

export default App;