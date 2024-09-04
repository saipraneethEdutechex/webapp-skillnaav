// server.js

const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db"); // Assuming connectDB is in a config folder

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(express.json());

// MongoDB Connection
connectDB(); // Use connectDB function to establish MongoDB connection

// Use the user routes
app.use("/api", userRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
