import React from "react";
import { useParams } from "react-router-dom";
import "./DetailsPage.scss";

// Sample data
const Data = [
  {
    id: 1,
    imgSrc: require("../../Assets/Opera House.jpg"),
    desTitle: "Sydney Opera House",
    location: "Bennelong Point, Sydney NSW 2000, Australia",
    fees: "$42 for adults, $22 for children (Tour Fees)",
    description:
      "The Sydney Opera House is one of the 20th century’s most famous and distinctive buildings, located on the stunning Sydney Harbour. It’s a must-see for travelers with tours, performances, and dining experiences.",
  },
  {
    id: 2,
    imgSrc: require("../../Assets/Great Barrier Reef.jpg"),
    desTitle: "Great Barrier Reef",
    location: "Cairns, Queensland, Australia",
    fees: "$100 to $250 for diving tours",
    description:
      "🏝️ Explore the Great Barrier Reef, one of the world's top snorkeling and diving destinations! 🌊 </br> 🐠 Dive into vibrant coral gardens, swim with sea turtles, or take a glass-bottom boat tour for a breathtaking view of marine life. 🚤 </br> ✨ For adventure seekers, try jet skiing, parasailing, or scenic helicopter rides over the stunning reef. 🚁🌞",
  },
  {
    id: 3,
    imgSrc: require("../../Assets/Uluru.jpg"),
    desTitle: "Uluru (Ayers Rock)",
    location: "Uluru-Kata Tjuta National Park, Northern Territory, Australia",
    fees: "$38 for a 3-day park pass",
    description:
      'Uluru is a massive sandstone monolith in the heart of the Northern Territory’s arid "Red Centre." It’s sacred to Indigenous Australians and known for its shifting colors at sunrise and sunset.',
  },
  {
    id: 4,
    imgSrc: require("../../Assets/Great Ocean Road.jpg"),
    desTitle: "Great Ocean Road",
    location: "Victoria, Australia",
    fees: "Free (Self-Drive), $50 to $150 for guided tours",
    description:
      "The Great Ocean Road is an iconic coastal drive stretching 243 kilometers along the southeastern coast of Australia. Famous for the Twelve Apostles rock formations and scenic views.",
  },
  {
    id: 5,
    imgSrc: require("../../Assets/Bondi Beach.jpg"),
    desTitle: "Bondi Beach",
    location: "Bondi, Sydney NSW 2026, Australia",
    fees: "Free (Beach Access), $20 to $60 for surfing lessons",
    description:
      "Bondi Beach is one of the world’s most famous beaches, known for its golden sands and surfing waves. It’s a vibrant spot for both locals and tourists, offering various beachfront cafes and events.",
  },
];

const DetailsPage = () => {
  const { id } = useParams();
  const destination = Data.find((item) => item.id === parseInt(id));

  // Find the destination by ID
  if (!destination) {
    return <h2>Destination not found</h2>;
  }
  const { imgSrc, desTitle, location, fees, description } = destination;
  return (
    <div className="details-page">
      <div className="detail-page-content">
        <div className="details-content">
          <h1>{desTitle}</h1>
          <p>
            <strong>Location:</strong> {location}
          </p>
          <p>
            <strong>Fees:</strong> {fees}
          </p>
          <p>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </p>
          <button type="button">Book now</button>
        </div>
        <div className="details-header">
          <img src={imgSrc} alt={desTitle} className="img" />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
