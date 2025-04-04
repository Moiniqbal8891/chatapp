const express = require("express");
const router = express.Router();

// Import the controller function
const { user } = require("../controller/user");

// Define a GET route
router.post("/", user); // Now accessible at `/api/user/`

module.exports = router;
