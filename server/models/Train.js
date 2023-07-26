import mongoose from "mongoose";
const { Schema } = mongoose;

const trainSchema = new Schema(
  {
    trainName: { type: String, required: true },
    trainNumber: { type: String, required: true },
    departureTime: {
      Hours: { type: Number, required: true },
      Minutes: { type: Number, required: true },
      Seconds: { type: Number, required: true },
    },
    seatsAvailable: {
      sleeper: { type: Number, required: true },
      AC: { type: Number, required: true },
    },
    price: {
      sleeper: { type: Number, required: true },
      AC: { type: Number, required: true },
    },
    delayedBy: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("train", trainSchema);
