import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const ExitIntentPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Track reloads using sessionStorage
  useEffect(() => {
    const isReloaded = sessionStorage.getItem("isReloaded");

    if (isReloaded === "true") {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 1000); // Show after 1 second

      return () => clearTimeout(timer);
    } else {
      sessionStorage.setItem("isReloaded", "true");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_d6ynf6c",
        "template_ep8xazb",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: "Popup form submission",
        },
        "iZFeSmwOTXfOQ_Ovy"
      );

      alert("Thank you! We will contact you shortly.");
      setShowPopup(false);
    } catch (error) {
      console.error("Failed to send:", error);
      alert("Failed to send. Please try again later.");
    }
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          className="popup-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowPopup(false)}
        >
          <motion.div
            className="popup-content"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setShowPopup(false)}
              aria-label="Close popup"
            >
              <FaTimes />
            </button>

            <div className="popup-body">
              <h3>Special Offer Just For You!</h3>
              <p>Book your first session today and get 15% off</p>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="submit-btn">
                  Claim My Discount
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
