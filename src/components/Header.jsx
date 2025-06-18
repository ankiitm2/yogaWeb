import { NavLink } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const activeStyle = {
    color: "#4a6b57",
    fontWeight: "600",
    borderBottom: "2px solid #4a6b57",
  };

  return (
    <header className="header">
      <div className="header-container">
        <NavLink to="/" className="logo-link">
          <img src="/yogaLogo.png" alt="RB Yoga Logo" width={60} />
          <span>RB Yoga</span>
        </NavLink>

        <button className="mobile-menu-button" onClick={toggleMenu}>
          ☰
        </button>

        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            <li>
              <NavLink
                to="/"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <a href="tel:9958021357" className="phone-link">
                <IoCall />
                <span>9958021357</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
