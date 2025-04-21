import { useEffect } from "react";
import { useRef } from "react";
import Sidebar from "./Sidebar";
import ChatBox from "./mainchat";
import Profile from "./profile";
import { Paper } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import io from "socket.io-client";
import { Message, SendRounded } from "@mui/icons-material";
const PATH = "http://localhost:5000";

// import socket from "./socket"; this work was for connection in starting i did
const Chat = () => {
  const socketRef = useRef();
  const nav = useNavigate;
  const [IsConnected, setIsConnected] = useState(false);
  const [onlineUsers, setonlineUsers] = useState([]);
  const [allMessaages, setallMessaages] = useState([]);
  const [roomData, setroomData] = useState({
    room: null,
    receiver: null,
  });
  const { state } = useLocation();
  useEffect(() => {
    if (!state) {
      nav("/");
      return;
    }
  });
  useEffect(() => {
    const socket = io(PATH); // Connect to the server
    socketRef.current = socket;
    socket.on("connect", () => {
      console.log("Connected to server with socket ID:", socket.id); // Log socket ID
      socket.on("connect", () => {
        setIsConnected(true);
      });
      socket.off("disconnect", () => {
        setIsConnected(false);
      });
    });
  }, []);
  useEffect(() => {
    if (IsConnected) {
      socketRef.current.emit("ADD_USER", state);
      socketRef.current.on("User_Added", (data) => {
        setonlineUsers(data);
      });
      socketRef.current.on("UsUser_Removed", (data) => {
        setonlineUsers(data);
      });
      socketRef.current.on("Received_Message", (data) => {
        console.log(data, "data from server");
        setallMessaages((prevState) => [...prevState, data]);
      });
    }
  }, [IsConnected]);
  const handleMessage = (Message) => {
    const data = {
      Message,
      receiver: roomData.reciever.user,
      sender: state,
    };

    console.log("this is console Message from chat ", allMessaages);
    socketRef.current.emit("Send_Message", data);
    setallMessaages((prevState) => [...prevState, data]);
  };
  console.log(allMessaages);

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
      <Sidebar
        user={state}
        onlineUsers={onlineUsers}
        setroomData={setroomData}
        roomData={roomData}
      />
      <ChatBox
        roomData={roomData}
        handleMessage={handleMessage}
        allMessaages={allMessaages}
      />
      <Profile user={state} />
    </Paper>
  );
};
export default Chat;
