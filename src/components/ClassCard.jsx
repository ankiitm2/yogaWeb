import { Link } from "react-router-dom";

const ClassCard = ({ classItem }) => {
  return (
    <div className="service-card">
      <div className="service-image">
        <img src={classItem.image} alt={classItem.title} />
      </div>
      <div className="service-content">
        <h3 className="service-title">{classItem.title}</h3>
        <p className="service-description">{classItem.description}</p>
        <Link to="/contact" className="btn">
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default ClassCard;
