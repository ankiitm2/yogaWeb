import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ClassCard from "./ClassCard";

const ServicesCarousel = () => {
  const services = [
    {
      id: 1,
      title: "Private Yoga Sessions",
      description: "One-on-one personalized yoga instruction at your home.",
      image: "/full-shot-people-doing-yoga-together.jpg",
    },
    {
      id: 2,
      title: "Couples Yoga",
      description: "Practice together with your partner for shared wellness.",
      image: "/couples-yoga.jpg",
    },
    {
      id: 3,
      title: "Family Yoga",
      description: "Yoga sessions designed for the whole family to enjoy.",
      image: "/family-yoga.jpg",
    },
    {
      id: 4,
      title: "Corporate Yoga",
      description: "Bring yoga to your workplace for employee wellness.",
      image: "/corporate-yoga.jpg",
    },
    {
      id: 5,
      title: "Senior Yoga",
      description: "Gentle yoga adapted for older adults.",
      image: "/senior-people-practicing-yoga.jpg",
    },
    {
      id: 6,
      title: "Prenatal Yoga",
      description: "Specialized yoga for expecting mothers.",
      image: "/person-doing-yoga-pilates.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3); // Default for desktop

  // Adjust number of cards based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= services.length - cardsToShow ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? services.length - cardsToShow : prevIndex - 1
    );
  };

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, cardsToShow]);

  return (
    <section className="services-carousel-section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle text-center">
          Tailored yoga experiences delivered to your doorstep
        </p>

        <div className="carousel-container">
          <button className="carousel-button prev" onClick={prevSlide}>
            <FaChevronLeft />
          </button>

          <div className="carousel">
            <motion.div
              className="carousel-track"
              animate={{ x: `-${currentIndex * (100 / cardsToShow)}%` }}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
            >
              {services.map((service) => (
                <div
                  key={service.id}
                  className="carousel-item"
                  style={{ width: `${100 / cardsToShow}%` }}
                >
                  <ClassCard classItem={service} />
                </div>
              ))}
            </motion.div>
          </div>

          <button className="carousel-button next" onClick={nextSlide}>
            <FaChevronRight />
          </button>
        </div>

        <div className="carousel-indicators">
          {Array.from({ length: services.length - cardsToShow + 1 }).map(
            (_, index) => (
              <button
                key={index}
                className={`indicator ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
