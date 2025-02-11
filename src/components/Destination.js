import React from "react";
import "./Destination.css";  // Import CSS for styling

// Destination data array (You can later fetch this from an API)
const destinations = [
  {
    id: 1,
    name: "Paris, France",
    image: require("../assets/paris.jpg"),
    description: "Experience the charm of the Eiffel Tower and fine dining.",
  },
  {
    id: 2,
    name: "Bali, Indonesia",
    image: require("../assets/bali.jpg"),
    description: "A tropical paradise with stunning beaches and culture.",
  },
  {
    id: 3,
    name: "New York, USA",
    image: require("../assets/ny.jpg"),
    description: "The city that never sleeps, full of skyscrapers and lights.",
  },
  {
    id: 4,
    name: "Santorini, Greece",
    image: require("../assets/santorini.jpg"),
    description: "Beautiful white-washed houses overlooking blue waters.",
  },
];

const Destination = () => {
  return (
    <div className="destination-container">
      <h2>Popular Destinations</h2>
      <div className="destination-grid">
        {destinations.map((dest) => (
          <div key={dest.id} className="destination-card">
            <img src={dest.image} alt={dest.name} />
            <h3>{dest.name}</h3>
            <p>{dest.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;
