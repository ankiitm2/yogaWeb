import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Transform Your Life Through Yoga</h1>
        <p className="hero-subtitle">
          Personalized door-to-door yoga instruction with 10+ years of
          experience
        </p>
        <div className="hero-buttons">
          <Link to="/classes" className="btn">
            View Classes
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Book a Session
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
