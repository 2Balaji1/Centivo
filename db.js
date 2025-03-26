const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://balajikommuru78:F6lsCduj7svpZbjY@centivo.4heccu1.mongodb.net/?retryWrites=true&w=majority&appName=Centivo";
const client = new MongoClient(uri);

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return client;
  } catch (err) {
    console.error(err);
  }
}

module.exports = { connectToMongoDB };
