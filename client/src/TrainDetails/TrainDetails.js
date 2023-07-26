import React from 'react'

import './TrainCard.css'; // Import the CSS file

const TrainCard = ({ train }) => {
  const { trainName, trainNumber, departureTime, seatsAvailable, price, delayedBy } = train;

  return (
    <div className="train-card">
      <h3>{trainName}</h3>
      <p>Train Number: {trainNumber}</p>
      <p>
        Departure Time: {departureTime.Hours}:{departureTime.Minutes}:{departureTime.Seconds}
      </p>
      <p>Sleeper Seats: {seatsAvailable.sleeper}</p>
      <p>AC Seats: {seatsAvailable.AC}</p>
      <p>Sleeper Price: {price.sleeper}</p>
      <p>AC Price: {price.AC}</p>
      <p>Delayed By: {delayedBy} minutes</p>
    </div>
  );
};

const TrainDetails = ({ trainData }) => {
  return (
    <div>
      <h2>Train Details</h2>
      <div className="train-card-container">
        {trainData.map((train, index) => (
          <TrainCard key={index} train={train} />
        ))}
      </div>
    </div>
  );
};

export default TrainDetails;
