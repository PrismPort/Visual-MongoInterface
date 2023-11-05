import express, { Request, Response } from "express"; // Import the Request and Response types
import mongoose from "mongoose";

const app = express();
const PORT = 4000;

mongoose.connect("mongodb://mongo:27017");

app.get("/", (req: Request, res: Response) => {
  // Use the Request and Response types
  res.send("Hello from the backend!");
});

app.get("/login", (req: Request, res: Response) => {
  // Use the Request and Response types
  res.send("login page!");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
