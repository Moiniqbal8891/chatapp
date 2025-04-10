// socketInit.js
const socket = require("socket.io");
const onlineUsers = [];
const addUser = (user, socketId) => {
  // const isExist = onlineUsers.findIndex((item) => item.id === user.id);

  // console.log(isExist);
  // user.socketId = socketId;
  onlineUsers.push({ socketId: user.socketId, ...user });

  // onlineUsers.push(user);
};
const socketInit = (server) => {
  const io = socket(server, {
    cors: {
      origin: "http://localhost:3000",
    },
  });
  io.on("connection", (socket) => {
    socket.on("ADD_USER", (user) => {
      addUser(user, socket.id);
      io.emit("User_Added", onlineUsers);
    });

    // addUser(user, socket.id);
    // io.emit("User Added ", onlineUsers);
  });
};

module.exports = socketInit;
