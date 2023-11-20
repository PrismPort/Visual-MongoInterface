require('dotenv').config();
import app from './app.js';
import { Request, Response } from 'express';
import { Db } from 'mongodb';
const { MongoClient } = require("mongodb");

const PORT = process.env.EXPRESS_PORT;

const os = require('os');
const networkInterfaces = os.networkInterfaces();
const localhostIP = networkInterfaces.lo ? networkInterfaces.lo[0].address : '127.0.0.1';



// starting express

if (!PORT) {
  console.error('Express port is not defined');
  process.exit(1);
}

app.listen(parseInt(PORT), '0.0.0.0', () => {
  console.log(`Server is running at ${PORT}`);
});

// cors settings onyl for development
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers","*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});



// mongodb connection string for static tests
/* const mongo_url = process.env.MONGO_URL;
const mongo_port = process.env.MONGO_PORT;
const database = process.env.MONGO_DB;
const uri = `mongodb://${mongo_url}:${mongo_port}`; */

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from the backend!");
});

app.get("/login", (req, res) => {
  res.send("login page!");
});

app.get("/alldata", (req, res) => {
  res.send("entire db")
});

app.get("/insertall", (req, res) => {
  res.send("pointer to db")
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
