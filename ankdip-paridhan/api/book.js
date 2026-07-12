import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (!uri) {
  console.warn("Please add your Mongo URI to .env.local");
} else {
  if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri, options);
      global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
  } else {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { name, phone, email, collection, date, requests } = req.body;

    // Basic Validation
    if (!name || !phone || !email || !date) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // If MONGODB_URI is not set, mock a successful response so the frontend still works for demo purposes
    if (!uri) {
      console.log('Mock Booking Received:', { name, phone, email, collection, date, requests });
      return res.status(200).json({ message: 'Booking mocked successfully (No MongoDB URI set)' });
    }

    const dbClient = await clientPromise;
    const db = dbClient.db('ankdip-paridhan');
    const bookings = db.collection('bookings');

    const result = await bookings.insertOne({
      name,
      phone,
      email,
      collection,
      date,
      requests,
      createdAt: new Date()
    });

    return res.status(200).json({ message: 'Booking confirmed', id: result.insertedId });
  } catch (error) {
    console.error('Booking Error:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
