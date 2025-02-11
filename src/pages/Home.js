import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination"; 
import InfluencerReviews from "../components/InfluencerReviews";
import Footer from "../components/Footer";
import ExploreSection from "../components/ExploreSection";

const exploreItems = [
  { image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=3150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Bangkok's Best Hotels", price: 299 },
  { image: "https://plus.unsplash.com/premium_photo-1661964177687-57387c2cbd14?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Tokyo Travel Guide", price: 450 },
  { image: "https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Paris: Must-See Places", price: 520 },
  { image: "https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Explore London", price: 399 },
  { image: "https://images.unsplash.com/photo-1532186651327-6ac23687d189?q=80&w=3149&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Bali's Hidden Gems", price: 289 },
];
const Home = () => {
  return (
    <div className="home-container">
  
      <Hero />
      <Destination /> 
      <ExploreSection exploreItems={exploreItems} />
      <InfluencerReviews />
    </div>
  );
};

export default Home;
