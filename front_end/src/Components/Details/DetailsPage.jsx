import React from "react";
import { useParams } from "react-router-dom";
import "./DetailsPage.scss"; // Optional: Create this file for custom styles

// Sample data (Alternatively, import this if it’s shared)
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
      "The Great Barrier Reef is the world’s largest coral reef system, stretching over 2,300 kilometers. It’s a UNESCO World Heritage site and a top destination for snorkeling and scuba diving.",
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

  if (!destination) {
    return <p>Destination not found!</p>;
  }

  const { imgSrc, desTitle, location, fees, description } = destination;

  return (
    <div className="details-page">
      <div className="title">
      <h1>{desTitle}</h1>
      </div>
      <div className="detail-page-content">
      <div className="details-header">
        <img src={imgSrc} alt={desTitle} className="img" />
      </div>
      <div className="details-content">
        <p>
          <strong>Location:</strong> {location}
        </p>
        <p>
          <strong>Fees:</strong> {fees}
        </p>
        <p>
          {/* <strong>Description:</strong> {description} */}
        </p>
      </div>
      </div>
    </div>
  );
};

export default DetailsPage;
