const express = require("express");
const cors = require("cors");
// Initialize express app
const app = express();
// Use CORS middleware to allow cross-origin requests
app.use(cors());
// Use express.json() middleware for parsing JSON in request body
app.use(express.json());

// Import the user route
const userRoute = require("./routes/user"); // Ensure the correct file path

// Set the route prefix

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use("/api/user", userRoute); // Ensures routes are available under `/api/user`

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
