import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import Footer from "./Components/Footer";
import ContactUs from "./Components/ContactUs";
import Services from "./Components/Services";
export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="pt-5 mt-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </div>
        <hr className="mt-2 pt-2 bg-dark"/>
        <Footer />
    </Router> 
    </div>
  );
}