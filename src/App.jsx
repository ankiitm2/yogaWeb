import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";
import "./assets/styles/global.css";
import "./assets/styles/index.css";
import ExitIntentPopup from "./components/ExitIntentPopup";
import { ToastProvider } from "./components/ToastNotification";
const NotFound = lazy(() => import("../src/pages/Notfound"));

const Home = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const Services = lazy(() => import("./pages/Services"));
const ContactPage = lazy(() => import("./pages/Contact"));
const ClassesPage = lazy(() => import("./pages/ClassesPage"));

import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <ToastProvider />
        <Header />
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/classes" element={<ClassesPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
        <Footer />
        <ExitIntentPopup />
      </div>
    </Router>
  );
}

export default App;
