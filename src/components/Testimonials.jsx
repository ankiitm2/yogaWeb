import { useState } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Homemaker",
      text: "RB's home yoga sessions have transformed my daily routine. His patience and expertise make each session rewarding.",
      rating: 5,
    },
    {
      id: 2,
      name: "Rahul Mehta",
      role: "IT Professional",
      text: "The convenience of door-to-door yoga with RB's professional guidance has been life-changing for my back pain.",
      rating: 5,
    },
    {
      id: 3,
      name: "The Kapoor Family",
      role: "Family Sessions",
      text: "Our weekly family yoga sessions with RB have brought us closer together while improving our health.",
      rating: 5,
    },
    {
      id: 4,
      name: "Ananya Patel",
      role: "Senior Citizen",
      text: "Gentle yoga adapted for my age has improved my flexibility and reduced joint pain significantly.",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // Auto-rotate testimonials every 5 seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextTestimonial();
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">What Our Students Say</h2>

        {/* Desktop Grid View */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <FaQuoteLeft className="quote-icon" />
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={
                      i < testimonial.rating ? "star-filled" : "star-empty"
                    }
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p className="role">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="testimonials-carousel">
          <button className="carousel-btn prev" onClick={prevTestimonial}>
            <FaChevronLeft />
          </button>

          <div className="testimonial-card">
            <FaQuoteLeft className="quote-icon" />
            <div className="testimonial-rating">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={
                    i < testimonials[currentIndex].rating
                      ? "star-filled"
                      : "star-empty"
                  }
                >
                  ★
                </span>
              ))}
            </div>
            <p className="testimonial-text">
              "{testimonials[currentIndex].text}"
            </p>
            <div className="testimonial-author">
              <h4>{testimonials[currentIndex].name}</h4>
              <p className="role">{testimonials[currentIndex].role}</p>
            </div>
          </div>

          <button className="carousel-btn next" onClick={nextTestimonial}>
            <FaChevronRight />
          </button>

          <div className="carousel-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`indicator ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
