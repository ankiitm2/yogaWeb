import { useState } from "react";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaCalendarAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const ContactPage = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: location.state?.service || "",
    date: "",
    message: "",
  });

  const services = [
    { id: "private", name: "Private Yoga Sessions" },
    { id: "couples", name: "Couples Yoga" },
    { id: "family", name: "Family Yoga" },
    { id: "corporate", name: "Corporate Yoga" },
    { id: "senior", name: "Senior Yoga" },
    { id: "prenatal", name: "Prenatal Yoga" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Booking submitted:", formData);
    alert("Thank you for your booking request! We will contact you shortly.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      message: "",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="contact-page"
    >
      <div className="contact-banner">
        <h1>Book a Session</h1>
        <div className="breadcrumbs">
          <a href="/">Home</a>
          <span> / </span>
          <span>Contact</span>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-card">
            <FaPhone className="info-icon" />
            <h3>Phone</h3>
            <a href="tel:9958021357">+91 9958021357</a>
          </div>

          <div className="info-card">
            <FaMapMarkerAlt className="info-icon" />
            <h3>Location</h3>
            <p>Delhi NCR, India</p>
          </div>

          <div className="info-card">
            <FaEnvelope className="info-icon" />
            <h3>Email</h3>
            <a href="mailto:rbyoga@example.com">rbyoga@example.com</a>
          </div>
        </div>

        <div className="booking-form-container">
          <h2>Book Your Yoga Session</h2>
          <form onSubmit={handleSubmit} className="booking-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="service">Service</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="date">
                <FaCalendarAlt /> Preferred Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Additional Notes</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Book Now
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
