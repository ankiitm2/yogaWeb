import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServicesCarousel from "../components/ServicesCarousel";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ServicesCarousel />
      <Testimonials />
    </main>
  );
};

export default Home;
