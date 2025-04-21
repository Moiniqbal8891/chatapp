const http = require("http");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const socket = require("./socket");
const userRoute = require("./routes/user"); // Ensure the correct file path
const server = http.createServer(app);
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
const removeUser = (socketId) => {
  const isExist = onlinUsers.findIndex((item) => item.id == user.id);
};
app.use("/api/user", userRoute); // Ensures routes are available under `/api/user`

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  socket(server);
  console.log(`Server is running on port ${PORT}`);
});
