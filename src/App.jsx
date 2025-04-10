import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Lazy load components for code splitting
const Home = lazy(() => import("./Components/Home"));
const About = lazy(() => import("./Components/About"));
const Profile = lazy(() => import("./Components/Profile"));
const Services = lazy(() => import("./Components/Services"));
const ContactUs = lazy(() => import("./Components/ContactUs"));

export default function App() {
  return (
    <>
      <Router>
        <header>
          <Navbar />
        </header>
        <main className="pt-5 mt-5">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="*" element={<div>404 - Page Not Found</div>} />
            </Routes>
          </Suspense>
        </main>
        <hr className="mt-2 pt-2 bg-dark" />
        <footer>
          <Footer />
        </footer>
      </Router>
    </>
  );
}
