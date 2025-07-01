import { NavLink } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const activeStyle = {
    color: "#4a6b57",
    fontWeight: "600",
  };

  return (
    <header className="header">
      <div className="header-container">
        <NavLink to="/" className="logo-link" onClick={closeMenu}>
          <img src="/yogaLogo.png" alt="RB Yoga Logo" width={60} />
          <span>RB Yoga</span>
        </NavLink>

        {/* Mobile Menu Toggle Button */}
        <button
          className="mobile-menu-button"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          ☰
        </button>

        {/* Navigation Menu */}
        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            <li>
              <NavLink
                to="/"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                onClick={closeMenu}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                onClick={closeMenu}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <a
                href="tel:9958021357"
                className="phone-link"
                onClick={closeMenu}
              >
                <IoCall aria-hidden="true" />
                <span className="phone-number">9958021357</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
