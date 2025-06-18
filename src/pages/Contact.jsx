import { useState, useEffect } from "react";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaCalendarAlt,
  FaCheck,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Loader } from "@googlemaps/js-api-loader";

const ContactPage = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [map, setMap] = useState(null);

  const services = [
    { id: "private", name: "Private Yoga Sessions" },
    { id: "couples", name: "Couples Yoga" },
    { id: "family", name: "Family Yoga" },
    { id: "corporate", name: "Corporate Yoga" },
    { id: "senior", name: "Senior Yoga" },
    { id: "prenatal", name: "Prenatal Yoga" },
  ];

  // Initialize Google Maps
  useEffect(() => {
    const loader = new Loader({
      apiKey: "YOUR_GOOGLE_MAPS_API_KEY",
      version: "weekly",
    });

    loader.load().then(() => {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 28.6139, lng: 77.209 }, // Delhi coordinates
        zoom: 12,
      });
      new google.maps.Marker({
        position: { lat: 28.6139, lng: 77.209 },
        map,
        title: "RB Yoga Studio",
      });
      setMap(map);
    });
  }, []);

  // Handle form validation
  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.date) newErrors.date = "Please select a date";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email via EmailJS
      await emailjs.send(
        "service_d6ynf6c",
        "template_ep8xazb",
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          date: formData.date,
          message: formData.message,
        },
        "iZFeSmwOTXfOQ_Ovy"
      );

      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        message: "",
      });

      // Hide success modal after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error("Failed to send message:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Banner Section */}
      <div className="contact-banner">
        <h1>Book a Session</h1>
        <div className="breadcrumbs">
          <a href="/">Home</a>
          <span> / </span>
          <span>Contact</span>
        </div>
      </div>

      <div className="contact-container">
        {/* Contact Info Section */}
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
            <div id="map" className="map-container"></div>
          </div>

          <div className="info-card">
            <FaEnvelope className="info-icon" />
            <h3>Email</h3>
            <a href="mailto:rbyoga@example.com">rbyoga@example.com</a>
          </div>
        </div>

        {/* Booking Form Section */}
        <div className="booking-form-container">
          <h2>Book Your Yoga Session</h2>
          <form onSubmit={handleSubmit} className="booking-form" noValidate>
            {/* Name Field */}
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "error" : ""}
                required
              />
              {errors.name && (
                <span className="error-message">{errors.name}</span>
              )}
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "error" : ""}
                required
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            {/* Phone Field */}
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? "error" : ""}
                required
              />
              {errors.phone && (
                <span className="error-message">{errors.phone}</span>
              )}
            </div>

            {/* Service Field */}
            <div className="form-group">
              <label htmlFor="service">Service</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={errors.service ? "error" : ""}
                required
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name}
                  </option>
                ))}
              </select>
              {errors.service && (
                <span className="error-message">{errors.service}</span>
              )}
            </div>

            {/* Date Field */}
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
                className={errors.date ? "error" : ""}
                min={new Date().toISOString().split("T")[0]}
                required
              />
              {errors.date && (
                <span className="error-message">{errors.date}</span>
              )}
            </div>

            {/* Message Field */}
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

            {/* Submit Button */}
            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Booking..." : "Book Now"}
            </button>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="success-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="modal-content">
              <div className="success-icon">
                <FaCheck />
              </div>
              <h3>Booking Successful!</h3>
              <p>
                Thank you for your booking. We'll contact you shortly to confirm
                your session.
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="modal-close-btn"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactPage;
