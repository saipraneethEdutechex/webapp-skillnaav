const express = require("express");
const {
  getUsers,
  createUser,
  getUserById,
} = require("../controllers/userController.js");
const router = express.Router();
const { registerUser } = require("../controllers/userController");


// GET all users
router.get("/users", getUsers);

// POST a new user
router.post("/users", createUser);

// GET a user by ID
router.get("/users/:id", getUserById);

// POST to register a new user
router.post("/register", registerUser);

module.exports = router;
