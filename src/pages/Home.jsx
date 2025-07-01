import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServicesCarousel from "../components/ServicesCarousel";
import Testimonials from "../components/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>RB Yoga - Personalized Yoga Training at Your Home</title>
        <meta
          name="description"
          content="Personal yoga classes by expert teacher with years of experience. Book home sessions or join online today!"
        />
        <meta
          name="keywords"
          content="yoga teacher, personal yoga, home yoga, door to door yoga, yoga in [your city], RB Yoga"
        />
        <link rel="canonical" href="https://rbyoga.netlify.app/" />
      </Helmet>

      <main>
        <Hero />
        <AboutSection />
        <ServicesCarousel />
        <Testimonials />
      </main>
    </>
  );
};

export default Home;
