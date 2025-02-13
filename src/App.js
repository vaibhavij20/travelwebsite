import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";

import Footer from "./components/Footer";
import TravelPlan from "./pages/TravelPlan"; 

import "./App.css";

// FontAwesome Setup
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Service />} />
          <Route path="/travelPlan" element={<TravelPlan />} />
        
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
