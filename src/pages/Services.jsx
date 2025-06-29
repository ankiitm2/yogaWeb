import { useState } from "react";
import { FaChevronRight, FaChevronLeft, FaHome } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Private Yoga Sessions",
      description:
        "One-on-one personalized yoga instruction at your home with customized routines.",
      benefits: [
        "Tailored to your fitness level",
        "Flexible scheduling",
        "Personal attention",
      ],
      price: "Fill Form",
    },
    {
      id: 2,
      title: "Couples Yoga",
      description:
        "Practice together with your partner to enhance connection and mutual wellness.",
      benefits: [
        "Improve communication",
        "Synchronized breathing",
        "Shared goals",
      ],
      price: "Fill Form",
    },
    {
      id: 3,
      title: "Family Yoga",
      description:
        "Fun sessions designed for the whole family to enjoy and bond through yoga.",
      benefits: [
        "All ages welcome",
        "Builds family unity",
        "Healthy habits together",
      ],
      price: "Fill Form",
    },
    {
      id: 4,
      title: "Corporate Yoga",
      description:
        "Bring yoga to your workplace for employee wellness and stress reduction.",
      benefits: [
        "Reduces workplace stress",
        "Improves productivity",
        "Team building",
      ],
      price: "Fill Form",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [isExpanded, setIsExpanded] = useState(
    Array(services.length).fill(false)
  );

  const toggleExpand = (index) => {
    const newExpanded = [...isExpanded];
    newExpanded[index] = !newExpanded[index];
    setIsExpanded(newExpanded);
  };

  const nextService = () => {
    setActiveTab((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const prevService = () => {
    setActiveTab((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  return (
    <section className="services-section" id="services">
      {/* Banner Section */}
      <div className="services-banner">
        <div className="container">
          <h1>OUR SERVICES</h1>
          <div className="breadcrumbs">
            <a href="/">
              <FaHome /> Home
            </a>
            <span> / </span>
            <span>Services</span>
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className="section-title">Discover Our Offerings</h2>
        <p className="section-subtitle">
          Personalized yoga experiences at your doorstep
        </p>

        {/* Desktop Tab View */}
        <div className="services-tabs desktop-view">
          <div className="tab-buttons">
            {services.map((service, index) => (
              <button
                key={service.id}
                className={`tab-btn ${activeTab === index ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
                aria-label={`View ${service.title} service`}
              >
                {service.title}
              </button>
            ))}
          </div>

          <div className="tab-content">
            <div className="service-card">
              <h3>{services[activeTab].title}</h3>
              <p className="service-description">
                {services[activeTab].description}
              </p>

              <div
                className={`service-details ${
                  isExpanded[activeTab] ? "expanded" : ""
                }`}
              >
                <h4>Benefits:</h4>
                <ul>
                  {services[activeTab].benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
                <p className="price">
                  <a href="/contact">{services[activeTab].price}</a>
                </p>
              </div>

              <button
                className="expand-btn"
                onClick={() => toggleExpand(activeTab)}
                aria-expanded={isExpanded[activeTab]}
              >
                {isExpanded[activeTab] ? "Show Less" : "Learn More"}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Carousel View */}
        <div className="services-carousel mobile-view">
          <div className="service-card">
            <h3>{services[activeTab].title}</h3>
            <p className="service-description">
              {services[activeTab].description}
            </p>

            <div
              className={`service-details ${
                isExpanded[activeTab] ? "expanded" : ""
              }`}
            >
              <h4>Benefits:</h4>
              <ul>
                {services[activeTab].benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
              <p className="price">{services[activeTab].price}</p>
            </div>

            <div className="carousel-controls">
              <button
                className="nav-btn"
                onClick={prevService}
                aria-label="Previous service"
              >
                <FaChevronLeft />
              </button>

              <button
                className="expand-btn"
                onClick={() => toggleExpand(activeTab)}
                aria-expanded={isExpanded[activeTab]}
              >
                {isExpanded[activeTab] ? "Show Less" : "Learn More"}
              </button>

              <button
                className="nav-btn"
                onClick={nextService}
                aria-label="Next service"
              >
                <FaChevronRight />
              </button>
            </div>

            <div className="carousel-indicators">
              {services.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${activeTab === index ? "active" : ""}`}
                  onClick={() => setActiveTab(index)}
                  aria-label={`Go to service ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
