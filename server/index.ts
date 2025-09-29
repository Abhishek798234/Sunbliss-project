import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const MONGODB_URI = 'mongodb+srv://gainacredb_db_user:3YYgnkLmpupDfD8s@cluster0.a8kyi3q.mongodb.net/sunbliss';

let db: any;

MongoClient.connect(MONGODB_URI)
  .then(client => {
    console.log('Connected to MongoDB Atlas');
    db = client.db('sunbliss');
  })
  .catch(error => console.error('MongoDB connection error:', error));

app.post('/api/inquiry', async (req, res) => {
  try {
    const inquiryData = {
      ...req.body,
      createdAt: new Date()
    };
    
    const result = await db.collection('inquiries').insertOne(inquiryData);
    
    res.json({ success: true, id: result.insertedId });
  } catch (error) {
    console.error('Error saving inquiry:', error);
    res.status(500).json({ success: false, error: 'Failed to save inquiry' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});