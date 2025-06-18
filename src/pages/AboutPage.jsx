import { motion } from "framer-motion";
import About from "../components/AboutSection";

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="about-page"
    >
      <About expanded={true} />
      {/* Add more detailed content here */}
    </motion.div>
  );
};

export default AboutPage;
