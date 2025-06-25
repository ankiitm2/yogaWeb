import { useState, useEffect } from "react";
import {
  FaQuoteLeft,
  FaChevronRight,
  FaChevronLeft,
  FaStar,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Homemaker",
      text: "RB's home yoga sessions have transformed my daily routine. His patience and expertise make each session rewarding.",
      rating: 5,
      avatar: "/priya.jpg",
    },
    {
      id: 2,
      name: "Rahul Mehta",
      role: "IT Professional",
      text: "The convenience of door-to-door yoga with RB's professional guidance has been life-changing for my back pain.",
      rating: 5,
      avatar: "/rahulMehta.jpg",
    },
    {
      id: 3,
      name: "The Kapoor Family",
      role: "Family Sessions",
      text: "Our weekly family yoga sessions with RB have brought us closer together while improving our health.",
      rating: 5,
      avatar: "/kapoorFamily.jpg",
    },
    {
      id: 4,
      name: "Ananya Patel",
      role: "Senior Citizen",
      text: "Gentle yoga adapted for my age has improved my flexibility and reduced joint pain significantly.",
      rating: 5,
      avatar: "/ananyaPatel.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextTestimonial = () => {
    setDirection("right");
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setDirection("left");
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToTestimonial = (index) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextTestimonial();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const variants = {
    enter: (direction) => ({
      x: direction === "right" ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    exit: (direction) => ({
      x: direction === "right" ? -300 : 300,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.2,
      },
    }),
  };

  return (
    <section className="testimonials">
      <div className="testimonials__container container">
        <h2 className="testimonials__title">What Our Students Say</h2>
        <p className="testimonials__subtitle">
          Hear from our satisfied yoga practitioners
        </p>

        <div
          className="testimonials__carousel"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <button
            className="testimonials__button testimonials__button--prev"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>

          <div className="testimonials__track">
            <AnimatePresence custom={direction} mode="popLayout">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="testimonials__card"
              >
                <div className="testimonials__avatar">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="testimonials__image"
                    width={80}
                    height={80}
                    loading="lazy"
                  />
                  <FaQuoteLeft className="testimonials__quote-icon" />
                </div>
                <div className="testimonials__content">
                  <blockquote className="testimonials__text">
                    "{testimonials[currentIndex].text}"
                  </blockquote>
                  <div className="testimonials__rating">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`testimonials__star ${
                          i < testimonials[currentIndex].rating
                            ? "testimonials__star--filled"
                            : "testimonials__star--empty"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="testimonials__author">
                    <h3 className="testimonials__name">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="testimonials__role">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            className="testimonials__button testimonials__button--next"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>
        </div>

        <div className="testimonials__indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`testimonials__indicator ${
                index === currentIndex ? "testimonials__indicator--active" : ""
              }`}
              onClick={() => goToTestimonial(index)}
              aria-label={`View testimonial ${index + 1}`}
              aria-current={index === currentIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
