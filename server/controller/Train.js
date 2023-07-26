
import Train from "../models/Train.js"
 export const register = async (req, res) => {
    console.log("hiii");
  const { trainName, trainNumber, departureTime, seatsAvailable, price, delayedBy } = req.body;

  if (!trainName || !trainNumber || !departureTime || !seatsAvailable || !price || delayedBy === undefined) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const newTrain = new Train({
      trainName,
      trainNumber,
      departureTime,
      seatsAvailable,
      price,
      delayedBy,
    });

    // Save the new train document to the database
    await newTrain.save();

    return res.status(201).json({ message: "Train registered successfully" });
  } catch (err) {
    return res.status(500).json({ error: "Failed to register train" });
  }
};
export const registerBulk = async (req, res) => {
    const trainData = req.body; 
  
    if (!Array.isArray(trainData) || trainData.length === 0) {
      return res.status(400).json({ error: "Invalid train data" });
    }
  
    try {

      const newTrains = [];
  
    
      for (const train of trainData) {
        const { trainName, trainNumber, departureTime, seatsAvailable, price, delayedBy } = train;
  
        if (!trainName || !trainNumber || !departureTime || !seatsAvailable || !price || delayedBy === undefined) {
          return res.status(400).json({ error: "Invalid train data" });
        }
  
      
        const newTrain = new Train({
          trainName,
          trainNumber,
          departureTime,
          seatsAvailable,
          price,
          delayedBy,
        });
  
   
        newTrains.push(newTrain);
      }
  
     
      await Train.insertMany(newTrains);
  
      return res.status(201).json({ message: "Bulk train data uploaded successfully" });
    } catch (err) {
      return res.status(500).json({ error: "Failed to upload bulk train data" });
    }
  };
  


export const gettrain = async (req, res) => {
  try {

    const trains = await Train.find();

    return res.status(200).json(trains);
  } catch (err) {
    return res.status(500).json({ error: "Failed to fetch trains" });
  }
};

