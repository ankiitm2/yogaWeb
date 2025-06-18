const ClassCard = ({ classItem }) => {
  return (
    <div className="service-card">
      <div className="service-image">
        <img 
          src={classItem.image} 
          alt={classItem.title}
          loading="lazy"
        />
      </div>
      <div className="service-content">
        <h3 className="service-title">{classItem.title}</h3>
        <p className="service-description">{classItem.description}</p>
        <button className="btn">Book Now</button>
      </div>
    </div>
  );
};

export default ClassCard;