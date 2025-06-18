import { motion } from "framer-motion";
import AboutSection from "../components/AboutSection";

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="about-page"
    >
      <AboutSection showBanner={true} />
    </motion.div>
  );
};

export default AboutPage;
