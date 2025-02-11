import React from "react";
import "./Hero.css";  // ✅ Import the CSS file
import bannerImage from "../assets//banner.jpg";  // ✅ Import the banner correctly

const Hero = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${bannerImage})`,  // ✅ Use imported image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>Your Journey, Your Story</h1>
        <p>Choose Your Favourite Destination.</p>
        <button className="travel-btn">Travel Plan</button>
      </div>
    </div>
  );
};

export default Hero;
