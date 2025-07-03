import { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaCalendarAlt,
  FaClock,
  FaUserAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ClassesPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [expandedClass, setExpandedClass] = useState(null);

  const yogaClasses = [
    {
      id: 1,
      title: "Hatha Yoga",
      description:
        "Traditional yoga practice focusing on physical postures and breathing techniques.",
      level: "Beginner",
      duration: "60 mins",
      schedule: "Mon, Wed, Fri | 7:00 AM",
      location: "Your Home / Online",
      instructor: "RB",
      image: "/hatha-yoga.jpg",
      type: "private",
    },
    {
      id: 2,
      title: "Vinyasa Flow",
      description:
        "Dynamic sequence of poses that flow from one to the next with breath.",
      level: "Intermediate",
      duration: "75 mins",
      schedule: "Tue, Thu | 6:30 AM",
      location: "Your Home / Online",
      instructor: "RB",
      image: "/vinyasa-yoga.jpg",
      type: "group",
    },
    {
      id: 3,
      title: "Yin Yoga",
      description:
        "Slow-paced style with poses held for longer periods to target deep connective tissues.",
      level: "All Levels",
      duration: "90 mins",
      schedule: "Sat | 9:00 AM",
      location: "Your Home / Online",
      instructor: "RB",
      image: "/yin-yoga.jpg",
      type: "private",
    },
    {
      id: 4,
      title: "Corporate Yoga",
      description:
        "Tailored sessions for workplace wellness and team building.",
      level: "All Levels",
      duration: "45-60 mins",
      schedule: "Flexible",
      location: "Your Office",
      instructor: "RB",
      image: "/corporate-yoga.jpg",
      type: "corporate",
    },
  ];

  const filteredClasses =
    activeTab === "all"
      ? yogaClasses
      : yogaClasses.filter((cls) => cls.type === activeTab);

  const toggleExpand = (id) => {
    setExpandedClass(expandedClass === id ? null : id);
  };

  return (
    <section className="classes-page">
      <div className="banner">
        <div className="container">
          <h1>Our Yoga Classes</h1>
          <p>Discover the perfect yoga practice for your needs</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Class Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                activeTab === "all"
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              All Classes
            </button>
            <button
              onClick={() => setActiveTab("private")}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "private"
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Private Sessions
            </button>
            <button
              onClick={() => setActiveTab("group")}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "group"
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Group Classes
            </button>
            <button
              onClick={() => setActiveTab("corporate")}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                activeTab === "corporate"
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Corporate Yoga
            </button>
          </div>
        </div>

        {/* Classes Grid */}
        <div className="classes-grid">
          {filteredClasses.map((cls, index) => (
            <motion.div
              key={cls.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
              className="class-card"
            >
              <div className="class-image-container">
                <img
                  src={cls.image}
                  alt={cls.title}
                  className="class-image"
                  loading="lazy"
                />
                <div className="class-level">{cls.level}</div>
              </div>
              <div className="class-content">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {cls.title}
                </h3>
                <p className="description">{cls.description}</p>

                <div className="class-detail">
                  <FaClock className="mr-2" />
                  <span>{cls.duration}</span>
                </div>
                <div className="class-detail">
                  <FaCalendarAlt className="mr-2" />
                  <span>{cls.schedule}</span>
                </div>
                <div className="class-detail">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>{cls.location}</span>
                </div>
                <div className="class-detail">
                  <FaUserAlt className="mr-2" />
                  <span>Instructor: {cls.instructor}</span>
                </div>

                <button
                  onClick={() => toggleExpand(cls.id)}
                  className="toggle-details"
                  aria-expanded={expandedClass === cls.id}
                >
                  {expandedClass === cls.id ? (
                    <>
                      <span>Less Details</span>
                      <FaChevronUp className="ml-2" />
                    </>
                  ) : (
                    <>
                      <span>More Details</span>
                      <FaChevronDown className="ml-2" />
                    </>
                  )}
                </button>

                {expandedClass === cls.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="class-details"
                  >
                    <h4 className="font-bold text-gray-700 mb-2">
                      What to Expect:
                    </h4>
                    <ul className="mb-4">
                      <li>Personalized attention from certified instructor</li>
                      <li>Modified poses for your skill level</li>
                      <li>Focus on proper alignment and breathing</li>
                      <li>Relaxation and meditation techniques</li>
                    </ul>
                    <a href="/contact" className="book-button">
                      Book This Class
                    </a>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassesPage;
