import { io } from "socket.io-client";

const SOCKET_URL = "http://localhost:5000"; // Ensure this matches your backend

const socket = io(SOCKET_URL, {
  reconnectionAttempts: 5, // Retry connection 5 times
  transports: ["websocket"], // Use WebSocket for better real-time performance
  autoConnect: true, // Automatically connect when imported
});

export default socket;
