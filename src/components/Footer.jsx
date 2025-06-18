import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <Link to="/" className="footer-logo">
              RB Yoga
            </Link>
            <p className="footer-text">
              Bringing the ancient wisdom of yoga to your doorstep since 2010.
            </p>
            <div className="social-links">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Quick Links</h3>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/classes">Classes</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Contact Info</h3>
            <div className="contact-info">
              <div className="contact-item">
                <FaPhone />
                <a href="tel:9958021357">+91 9958021357</a>
              </div>
              <div className="contact-item">
                <MdEmail />
                <a href="mailto:rbyoga@example.com">rbyoga@example.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} RB Yoga. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
