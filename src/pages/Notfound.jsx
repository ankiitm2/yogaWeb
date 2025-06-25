import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404 - Om Sweet Om</h1>
        <h2>Page Not Found</h2>
        <p>
          The page you're looking for seems to have escaped into meditation.
          Let's guide you back to your practice.
        </p>
        <div className="not-found-image">
          <img src="/yoga-404.png" alt="Yoga pose illustration" width={300} />
        </div>
        <Link to="/" className="home-link">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
