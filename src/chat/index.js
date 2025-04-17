import { io } from "socket.io-client";
import { useEffect } from "react";
import Sidebar from "./Sidebar";
import ChatBox from "./mainchat";
import Profile from "./profile";
import { Paper } from "@mui/material";
// const socket = io("http://localhost:5000"); // Ensure URL matches your backend
import socket from "./socket";
const Chat = () => {
  useEffect(() => {
    console.log("🔄 Trying to connect...");
    socket.on("connect", () => {
      console.log(`🔗 Connected to Socket: ${socket.id}`);
    });
    socket.on("disconnect", () => {
      console.log("❌ Disconnected from Server");
    });
    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

  return (
    <Paper square elevation={0} sx={{ height: "auto", display: "flex" }}>
      <Sidebar />
      <ChatBox />
      <Profile />
    </Paper>
  );
};
export default Chat;
