// const { app } = require(".");
// const Item = require("./models/Item"); // Create the Item model
const Item = require('./models/item')
const mongoose = require("mongoose");
const express = require("express");


const app = express();
const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

mongoose.connect("mongodb://localhost/solxraf/users", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() =>
  console.log('connected')).catch(() => {
    console.log('not connected')
  })

app.use(express.json());

app.get("/api/items", async (req, res) => {
  res.status(200).json({ message: 'API is running.' })
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});