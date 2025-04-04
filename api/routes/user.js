const express = require("express");
const router = express.Router();

// Import the controller function
const { Signup } = require("../controller/user");

// Define a GET route
router.post("/", Signup); // Now accessible at `/api/user/`

module.exports = router;
