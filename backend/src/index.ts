require('dotenv').config();
import app from './app.js';
import { Request, Response } from 'express';
import { Db } from 'mongodb';
const { MongoClient } = require("mongodb");

const PORT = process.env.EXPRESS_PORT;


// starting express

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

// mongodb connection string for static tests
/* const mongo_url = process.env.MONGO_URL;
const mongo_port = process.env.MONGO_PORT;
const database = process.env.MONGO_DB;
const uri = `mongodb://${mongo_url}:${mongo_port}`; */

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from the backend!");
});

app.get('/query-databases', async (req: Request, res: Response) => {
  const { mongoURL } = req.body; // Access the MongoDB URL from the request body

  if (!mongoURL) {
    return res.status(400).json({ error: 'MongoDB URL is required in the request body' });
  }

  try {
    // Establish the MongoDB connection using the provided URL
    const client = new MongoClient(mongoURL, { useUnifiedTopology: true });
    await client.connect();

    // Access the specified collection and query data
    const adminDb: Db = client.db('admin'); // Access the 'admin' database
    const databases = await adminDb.admin().listDatabases();

    // Close the MongoDB connection
    await client.close();

    const databaseNames = databases.databases.map(db => db.name);
    res.json(databaseNames);
  } catch (error) {
    console.error('Error querying data from MongoDB:', error);
    res.status(500).json({ error: 'Failed to query data from MongoDB' });
  }
});

app.get('/query/:database', async (req: Request, res: Response) => {
  const { mongoURL } = req.body; // Access the MongoDB URL from the request body
  const { database } = req.params;
  const { collection } = req.params;

  if (!mongoURL) {
    return res.status(400).json({ error: 'MongoDB URL is required in the request body' });
  }

  try {
    // Establish the MongoDB connection using the provided URL
    const client = new MongoClient(mongoURL, { useUnifiedTopology: true });
    await client.connect();

    // Access the specified collection and query data
    const db: Db = client.db(database);
    const collections = await db.listCollections().toArray();


    // Close the MongoDB connection
    await client.close();

    const collectionNames = collections.map(collection => collection.name);
    res.json(collectionNames);

  } catch (error) {
    console.error('Error querying data from MongoDB:', error);
    res.status(500).json({ error: 'Failed to query data from MongoDB' });
  }

});


app.post('/connect-to-mongodb', async (req: Request, res: Response) => {
  const { mongoURL } = req.body;

  if (!mongoURL) {
    return res.status(400).json({ error: 'MongoDB URL is required' });
  }

  try {
    const client = new MongoClient(mongoURL, { useUnifiedTopology: true });
    await client.connect();
    // Close the MongoDB connection
    await client.close();

    // respond with the provided URL as json and a success message
    res.json({ mongoURL, message: 'Successfully connected to MongoDB' });

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    res.status(500).json({ error: 'Failed to connect to MongoDB' });
  }
});