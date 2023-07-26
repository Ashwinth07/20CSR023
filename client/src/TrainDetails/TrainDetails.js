import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './TrainCard.css';

const TrainCard = ({ train }) => {
  const { trainName, trainNumber, departureTime, seatsAvailable, price, delayedBy } = train;

  return (
    <div className="train-card">
      <h3>{trainName}</h3>
      <p>Train Number: {trainNumber}</p>
      {train.clicked ? (
        <>
          <p>Departure Time: {departureTime.Hours}:{departureTime.Minutes}:{departureTime.Seconds}</p>
          <p>Sleeper Seats: {seatsAvailable.sleeper}</p>
          <p>AC Seats: {seatsAvailable.AC}</p>
          <p>Sleeper Price: {price.sleeper}</p>
          <p>AC Price: {price.AC}</p>
          <p>Delayed By: {delayedBy} minutes</p>
        </>
      ) : (
        <button>Click to view full content</button>
      )}
    </div>
  );
};

const TrainDetails = () => {
  const [trainData, setTrainData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/register/get")
      .then((response) => {
        const updatedData = response.data.map((train) => ({
          ...train,
          clicked: false, // Add a clicked property to each train object, initially set to false
        }));
        setTrainData(updatedData);
      })
      .catch((error) => {
        console.error('Error fetching train data:', error);
      });
  }, []);

  // Function to toggle the clicked state of a card
  const toggleCardContent = (index) => {
    const updatedData = [...trainData];
    updatedData[index].clicked = !updatedData[index].clicked;
    setTrainData(updatedData);
  };

  return (
    <div>
      <h2>Train Details</h2>
      <div className="train-card-container">
        {trainData.map((train, index) => (
          <div key={index} onClick={() => toggleCardContent(index)}>
            <TrainCard train={train} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainDetails;
