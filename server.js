const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const validator = require("validator");
require("dotenv").config();
const PORT =process.env.PORT || 5001;

const app = express();


app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(
    process.env.MONGO_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("MongoDB connected successfully.");
  })
  .catch(() => {
    console.log("Errors occurred.");
  });

// Schema
const recordSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: "Invalid email format.",
    },
  },
});

// Model
const Record = mongoose.model("Record", recordSchema);

// Routes

// Fetch records
app.get("/api/records", async (req, res) => {
  const records = await Record.find();
  res.json(records);
});

// Add new record with email validation
app.post("/api/records", async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and Email are required." });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Invalid email format." });
  }

  try {
    const newRecord = new Record({ name, email });
    await newRecord.save();
    res.status(201).json(newRecord);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while saving the record." });
  }
});

// Update record with email validation
app.put("/api/records/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and Email are required." });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Invalid email format." });
  }

  try {
    const updatedRecord = await Record.findByIdAndUpdate(id, { name, email }, { new: true });
    res.json(updatedRecord);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while updating the record." });
  }
});

// Delete record
app.delete("/api/records/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Record.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "An error occurred while deleting the record." });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
