import ClassCard from "./ClassCard";

const ServicesSection = () => {
  const classes = [
    {
      id: 1,
      title: "Private Yoga Sessions",
      description: "One-on-one personalized yoga instruction at your home.",
      image: "/images/private-yoga.jpg",
    },
    {
      id: 2,
      title: "Couples Yoga",
      description: "Practice together with your partner for shared wellness.",
      image: "/images/couples-yoga.jpg",
    },
    {
      id: 3,
      title: "Family Yoga",
      description: "Yoga sessions designed for the whole family to enjoy.",
      image: "/images/family-yoga.jpg",
    },
    {
      id: 4,
      title: "Corporate Yoga",
      description: "Bring yoga to your workplace for employee wellness.",
      image: "/images/corporate-yoga.jpg",
    },
  ];

  return (
    <section className="section services-section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle text-center">
          Tailored yoga experiences delivered to your doorstep
        </p>
        <div className="services-grid">
          {classes.map((classItem) => (
            <ClassCard key={classItem.id} classItem={classItem} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
