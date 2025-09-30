import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://sunbliss-project-x94n.vercel.app', 'https://sunblisspurvanchal.co.in', 'https://www.sunblisspurvanchal.co.in']
    : 'http://localhost:8080',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  optionsSuccessStatus: 200
}));

// Handle preflight requests
app.options('/*', (req, res) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.sendStatus(200);
});

// Add request logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - Origin: ${req.headers.origin}`);
  next();
});
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://gainacredb_db_user:3YYgnkLmpupDfD8s@cluster0.a8kyi3q.mongodb.net/sunbliss?retryWrites=true&w=majority&ssl=true';

let db;

console.log('Attempting to connect to MongoDB Atlas...');
MongoClient.connect(MONGODB_URI, {
  serverSelectionTimeoutMS: 30000,
  connectTimeoutMS: 30000
})
  .then(client => {
    console.log('✅ Connected to MongoDB Atlas');
    db = client.db('sunbliss');
    return client.db('admin').command({ ping: 1 });
  })
  .then(() => {
    console.log('✅ Database ping successful');
  })
  .catch(error => {
    console.error('❌ MongoDB connection error:', error.message);
    console.error('Check: 1) Network Access in MongoDB Atlas 2) Correct credentials');
  });

app.post('/api/inquiry', async (req, res) => {
  console.log('📝 Received inquiry request:', req.body);
  
  try {
    if (!db) {
      console.log('❌ Database not connected');
      return res.status(500).json({ success: false, error: 'Database not connected' });
    }
    
    console.log('✅ Database connected, saving inquiry...');
    
    const inquiryData = {
      ...req.body,
      createdAt: new Date()
    };
    
    const result = await db.collection('inquiries').insertOne(inquiryData);
    console.log('✅ Inquiry saved with ID:', result.insertedId);
    
    res.json({ success: true, id: result.insertedId });
  } catch (error) {
    console.error('❌ Error saving inquiry:', error);
    res.status(500).json({ success: false, error: 'Failed to save inquiry' });
  }
});

app.post('/api/site-visit', async (req, res) => {
  console.log('📅 Received site visit request:', req.body);
  
  try {
    if (!db) {
      console.log('❌ Database not connected');
      return res.status(500).json({ success: false, error: 'Database not connected' });
    }
    
    console.log('✅ Database connected, saving site visit request...');
    
    const siteVisitData = {
      ...req.body,
      createdAt: new Date()
    };
    
    const result = await db.collection('site_visits').insertOne(siteVisitData);
    console.log('✅ Site visit request saved with ID:', result.insertedId);
    
    res.json({ success: true, id: result.insertedId });
  } catch (error) {
    console.error('❌ Error saving site visit request:', error);
    res.status(500).json({ success: false, error: 'Failed to save site visit request' });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    database: db ? 'Connected' : 'Disconnected'
  });
});

// Test endpoint
app.get('/test', (req, res) => {
  console.log('✅ Test endpoint hit');
  res.json({ message: 'Server is working' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
});