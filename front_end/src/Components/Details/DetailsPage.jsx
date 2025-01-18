import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Data from '../Main/Main'; // Import your data file

const DetailsPage = () => {
  const { id } = useParams(); // Extract ID from URL
  const navigate = useNavigate();

  // Find the destination by ID
  const destination = Data.find((item) => item.id === parseInt(id));

  if (!destination) {
    return <h2>Destination not found</h2>;
  }

  const { imgSrc, desTitle, location, fees, description } = destination;

  return (
    <div className="details-page">
      <button onClick={() => navigate(-1)} className="back-btn">← Back</button>
      <div className="details-container">
        <img src={imgSrc} alt={desTitle} />
        <h1>{desTitle}</h1>
        <p><strong>Location:</strong> {location}</p>
        <p><strong>Fees:</strong> {fees}</p>
        <p><strong>Description:</strong> {description}</p>
      </div>
    </div>
  );
};

export default DetailsPage;
