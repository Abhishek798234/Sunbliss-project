import { MongoClient } from 'mongodb';

const uri = import.meta.env.VITE_MONGODB_URI || 'mongodb+srv://gainacredb_db_user:3YYgnkLmpupDfD8s@cluster0.a8kyi3q.mongodb.net/sunbliss';

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default clientPromise;