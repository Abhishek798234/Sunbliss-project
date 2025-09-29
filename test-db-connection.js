import { MongoClient } from 'mongodb';
import fetch from 'node-fetch';

// Test MongoDB connection
async function testDatabaseConnection() {
  const uri = 'mongodb+srv://gainacredb_db_user:3YYgnkLmpupDfD8s@cluster0.a8kyi3q.mongodb.net/sunbliss';
  
  console.log('🔍 Testing MongoDB Connection...\n');
  
  try {
    // Test 1: Basic Connection
    console.log('1️⃣ Testing basic connection...');
    const client = new MongoClient(uri, {
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 10000,
    });
    
    await client.connect();
    console.log('✅ Connected to MongoDB Atlas successfully');
    
    // Test 2: Database Access
    console.log('\n2️⃣ Testing database access...');
    const db = client.db('sunbliss');
    const collections = await db.listCollections().toArray();
    console.log('✅ Database "sunbliss" accessible');
    console.log('📁 Collections found:', collections.map(c => c.name));
    
    // Test 3: Ping Database
    console.log('\n3️⃣ Testing database ping...');
    await client.db('admin').command({ ping: 1 });
    console.log('✅ Database ping successful');
    
    // Test 4: Insert Test Document
    console.log('\n4️⃣ Testing document insertion...');
    const testCollection = db.collection('inquiries');
    const testDoc = {
      firstName: 'Test',
      lastName: 'User',
      email: 'test@example.com',
      countryCode: '+91',
      contact: '1234567890',
      preferredContact: 'email',
      agreeToPolicy: true,
      createdAt: new Date(),
      isTest: true
    };
    
    const insertResult = await testCollection.insertOne(testDoc);
    console.log('✅ Test document inserted with ID:', insertResult.insertedId);
    
    // Test 5: Read Test Document
    console.log('\n5️⃣ Testing document retrieval...');
    const foundDoc = await testCollection.findOne({ _id: insertResult.insertedId });
    console.log('✅ Test document retrieved:', foundDoc ? 'Success' : 'Failed');
    
    // Test 6: Count Documents
    console.log('\n6️⃣ Testing document count...');
    const totalDocs = await testCollection.countDocuments();
    const testDocs = await testCollection.countDocuments({ isTest: true });
    console.log('✅ Total inquiries:', totalDocs);
    console.log('📊 Test documents:', testDocs);
    
    // Test 7: Clean up test document
    console.log('\n7️⃣ Cleaning up test document...');
    await testCollection.deleteOne({ _id: insertResult.insertedId });
    console.log('✅ Test document cleaned up');
    
    await client.close();
    console.log('\n🎉 All database tests passed successfully!');
    
  } catch (error) {
    console.error('\n❌ Database connection test failed:');
    console.error('Error:', error.message);
    
    if (error.message.includes('authentication')) {
      console.error('\n🔐 Authentication Issue:');
      console.error('- Check username and password in connection string');
      console.error('- Verify database user permissions');
    }
    
    if (error.message.includes('network') || error.message.includes('timeout')) {
      console.error('\n🌐 Network Issue:');
      console.error('- Check internet connection');
      console.error('- Verify MongoDB Atlas network access settings');
      console.error('- Add your IP address to MongoDB Atlas whitelist');
    }
    
    if (error.message.includes('ENOTFOUND')) {
      console.error('\n🔍 DNS Issue:');
      console.error('- Check cluster URL in connection string');
      console.error('- Verify cluster is running in MongoDB Atlas');
    }
  }
}

// Test API endpoint
async function testAPIEndpoint() {
  console.log('\n🌐 Testing API Endpoint...\n');
  
  try {
    const testData = {
      firstName: 'API',
      lastName: 'Test',
      email: 'apitest@example.com',
      countryCode: '+91',
      contact: '9876543210',
      preferredContact: 'phone',
      agreeToPolicy: true
    };
    
    console.log('📤 Sending test request to http://localhost:3001/api/inquiry');
    
    const response = await fetch('http://localhost:3001/api/inquiry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    });
    
    if (response.ok) {
      const result = await response.json();
      console.log('✅ API endpoint working correctly');
      console.log('📝 Response:', result);
    } else {
      console.error('❌ API endpoint failed with status:', response.status);
      const errorText = await response.text();
      console.error('Error response:', errorText);
    }
    
  } catch (error) {
    console.error('❌ API test failed:', error.message);
    
    if (error.message.includes('ECONNREFUSED')) {
      console.error('\n🚫 Connection Refused:');
      console.error('- Make sure the server is running on port 3001');
      console.error('- Run: npm run server');
    }
  }
}

// Run tests
async function runAllTests() {
  await testDatabaseConnection();
  await testAPIEndpoint();
}

runAllTests();