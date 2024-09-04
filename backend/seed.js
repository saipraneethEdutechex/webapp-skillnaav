// seed.js

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/User");
const { users } = require("./data/mockData");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    try {
      await User.deleteMany(); // Clear existing users
      await User.insertMany(users); // Insert mock data
      console.log("Database seeded with mock data");
      process.exit();
    } catch (error) {
      console.error("Error seeding database", error);
      process.exit(1);
    }
  })
  .catch((error) => console.error("Failed to connect to MongoDB", error));
