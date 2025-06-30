import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLeaf, FaHandsHelping, FaHeart, FaMedal } from "react-icons/fa";

const AboutSection = ({ showBanner = false }) => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const featureItems = [
    {
      icon: <FaLeaf className="feature-icon" />,
      title: "Holistic Approach",
      description: "We integrate mind, body and spirit in every session",
    },
    {
      icon: <FaHandsHelping className="feature-icon" />,
      title: "Personalized Guidance",
      description: "Customized sessions for your unique needs",
    },
    {
      icon: <FaHeart className="feature-icon" />,
      title: "Heart-Centered",
      description: "Teaching with compassion and understanding",
    },
    {
      icon: <FaMedal className="feature-icon" />,
      title: "Certified Expertise",
      description: "500+ hours of certified yoga training",
    },
  ];

  return (
    <section className="about-section">
      {/* Conditional banner rendering */}
      {showBanner && (
        <motion.div
          className="about-page-banner"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="banner-image-container">
            <img
              src="/surynamaskar.jpg"
              alt="RB Yoga"
              className="banner-image"
              loading="lazy"
            />
          </div>
          <div className="banner-content">
            <motion.h1
              className="banner-title"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              ABOUT US
            </motion.h1>
            <motion.div
              className="breadcrumbs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/">Home</Link>
              <span> / </span>
              <span>About Us</span>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Main About Content */}
      <div className="container">
        <motion.div
          className="about-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div className="about-text" variants={fadeIn}>
            <motion.p variants={fadeIn}>
              With over a decade of experience teaching yoga door-to-door, RB
              brings the ancient practice directly to your home. His journey
              began in 2010 when he discovered the transformative power of yoga
              and decided to share it with his community.
            </motion.p>
            <motion.p variants={fadeIn}>
              RB specializes in Hatha and Vinyasa yoga, adapting each session to
              the individual needs of his students. His teaching philosophy
              emphasizes mindfulness, proper alignment, and the connection
              between breath and movement.
            </motion.p>

            <motion.div className="about-stats" variants={fadeIn}>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Students Taught</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Satisfaction</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="about-image"
            variants={fadeIn}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img
              src="/surynamaskar.jpg"
              alt="RB practicing yoga"
              loading="lazy"
            />
          </motion.div>
        </motion.div>

        {/* Mission Section */}
        <motion.section
          className="mission-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2>Our Mission</h2>
          <p>
            To make authentic yoga practice accessible to everyone, regardless
            of age, fitness level, or location. We believe yoga is not just
            physical exercise but a pathway to holistic well-being.
          </p>
        </motion.section>

        {/* Features Section */}
        <motion.section
          className="features-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <h2>Why Choose Us</h2>
          <div className="features-grid">
            {featureItems.map((item, index) => (
              <motion.div
                key={index}
                className="feature-card"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                {item.icon}
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default AboutSection;
