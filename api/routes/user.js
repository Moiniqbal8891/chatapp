const express = require("express");
const router = express.Router();

// Import the controller functions
const { Signup, Login } = require("../controller/user");

// Routes
router.post("/register", Signup);
router.post("/login", Login);

module.exports = router;
