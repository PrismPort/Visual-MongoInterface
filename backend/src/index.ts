import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = 4000;

mongoose.connect("mongodb://mongo:27017/mydatabase");

app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
