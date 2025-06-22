import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";
import "./assets/styles/global.css";
import "./assets/styles/index.css";
import ExitIntentPopup from "./components/ExitIntentPopup";
import { ToastProvider } from "./components/ToastNotification";

const Home = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const Services = lazy(() => import("./pages/Services"));
const ContactPage = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <Router>
      <div className="app">
        <ToastProvider />
        <Header />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
        <Footer />
        <ExitIntentPopup />
      </div>
    </Router>
  );
}

export default App;
