import { useEffect } from "react";
import Sidebar from "./Sidebar";
import ChatBox from "./mainchat";
import Profile from "./profile";
import { Paper } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import io from "socket.io-client";
const PATH = "http://localhost:5000";

// import socket from "./socket"; this work was for connection in starting i did
const Chat = () => {
  const nav = useNavigate;
  const { state } = useLocation();

  useEffect(() => {
    if (!state) {
      nav("/");
      return;
    }
  });
  useEffect(() => {
    const socket = io(PATH); // Connect to the server

    socket.on("connect", () => {
      console.log("Connected to server with socket ID:", socket.id); // Log socket ID
    });

    return () => {
      socket.disconnect(); // Clean up the socket connection on unmount
    };
  }, []);

  // useEffect(() => {
  //   console.log("🔄 Trying to connect...");
  //   socket.on("connect", () => {
  //     console.log(`🔗 Connected to Socket: ${socket.id}`);
  //   });
  //   socket.on("disconnect", () => {
  //     console.log("❌ Disconnected from Server");
  //   });
  //   return () => {
  //     socket.off("connect");
  //     socket.off("disconnect");
  //   };
  // }, []);
  return (
    <Paper square elevation={0} sx={{ height: "auto", display: "flex" }}>
      <Sidebar user={state} />
      <ChatBox />
      <Profile user={state} />
    </Paper>
  );
};
export default Chat;
