const express = require("express");
const { ObjectId } = require("mongodb"); // Import ObjectId from MongoDB
const app = express();
app.use(express.json());

const { connectToMongoDB } = require("./db");

async function getUserById(id) {
  const client = await connectToMongoDB();
  const db = client.db("Centivodb"); 
  const usersCollection = db.collection("users");

  // Query using the ObjectId and filter for age > 21
  const user = await usersCollection.findOne({ _id: new ObjectId(id), age: { $gt: 21 } });
  return user;
}

app.get("/users/:id", async (req, res) => {
  try {
    const userId = req.params.id;

    // Validate if the ID is a valid ObjectId
    if (!ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid user ID format" });
    }

    const user = await getUserById(userId);
    if (!user) {
      res.status(404).json({ message: "User not found or age <= 21" });
    } else {
      res.json(user);
    }
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
