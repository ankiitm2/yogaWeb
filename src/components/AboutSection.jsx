import { Link } from "react-router-dom";

const AboutSection = ({ showBanner = false }) => {
  return (
    <section className="about-section">
      {/* Conditional banner rendering */}
      {showBanner && (
        <div className="about-page-banner">
          <div className="banner-image-container">
            <img
              src="src/assets/images/person-doing-yoga-nature.jpg"
              alt="RB Yoga"
              className="banner-image"
            />
          </div>
          <div className="banner-content">
            <h1 className="banner-title">ABOUT US</h1>
            <div className="breadcrumbs">
              <Link to="/">Home</Link>
              <span> / </span>
              <span>About Us</span>
            </div>
          </div>
        </div>
      )}

      {/* Rest of the about content */}
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <p>
              With over a decade of experience teaching yoga door-to-door, RB
              brings the ancient practice directly to your home. His journey
              began in 2010 when he discovered the transformative power of yoga
              and decided to share it with his community.
            </p>
            <p>
              RB specializes in Hatha and Vinyasa yoga, adapting each session to
              the individual needs of his students. His teaching philosophy
              emphasizes mindfulness, proper alignment, and the connection
              between breath and movement.
            </p>
            <div className="about-stats">
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
            </div>
          </div>
          <div className="about-image">
            <img src="/images/about-yoga.jpg" alt="RB practicing yoga" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
