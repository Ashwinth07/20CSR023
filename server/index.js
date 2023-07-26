import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import registertrain from "./routes/registertrain.js"

dotenv.config();
const app = express();
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect("mongodb+srv://ashwinthk20cse:12345@cluster0.wco2yqk.mongodb.net/train?retryWrites=true&w=majority");
    console.log("mongodb connected");
  } catch (error) {
    throw error;
  }
};

const corsOpts = {
  origin: "*",
  methods: ["GET", "POST", "DELETE", "PUT"],
  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOpts));
mongoose.connection.on("disconnected", () => {
  console.log("Mongodb disconnected!");
});
app.use(express.json());
app.use("/api/register", registertrain);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});
app.listen(4000, () => {
  connect();
  console.log("backend connected");
});
