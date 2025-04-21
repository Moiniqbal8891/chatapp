// socketInit.js
const socket = require("socket.io");
const onlineUsers = [];

const addUser = (user, socketId) => {
  const isExist = onlineUsers.findIndex((item) => item.id === user.id);
  if (isExist !== -1) {
    onlineUsers.splice(isExist, 1);
  }
  user.socketId = socketId;
  onlineUsers.push(user);
};
const removeUser = (socketId) => {
  const isExist = onlineUsers.findIndex((item) => item.socketId === socketId);
  if (isExist !== -1) {
    onlineUsers.splice(isExist, 1);
  }
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

    socket.on("Send_Message", (Message) => {
      console.log("Message from socket and frontend", Message);
      // socket.to(Message.reciever.socketId).emit("Recieved_Message", Message);
      socket.to(Message.receiver.socketId).emit("Received_Message", Message);
    });

    socket.on("disconnect", (reason) => {
      console.log(socket.id, "disconnect");
      removeUser(socket.id);
      io.emit("User_Removed", onlineUsers);
    });

    // addUser(user, socket.id);
    // io.emit("User Added ", onlineUsers);
  });
};
module.exports = socketInit;
