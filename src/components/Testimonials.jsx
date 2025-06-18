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
  ];

  return (
    <section className="section testimonials-section">
      <div className="container">
        <h2 className="section-title">What Our Students Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-rating">
                {"★".repeat(testimonial.rating)}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
