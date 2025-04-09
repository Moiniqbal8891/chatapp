// socketInit.js
const socket = require("socket.io");

const socketInit = (server) => {
  const io = socket(server, {
    cors: {
      origin: "http://localhost:3000",
    },
  });
  io.on("connection", (socket) => {
    console.log(socket.id);
    console.log("id confirmed : ", socket.id);
  });
};

module.exports = socketInit;
