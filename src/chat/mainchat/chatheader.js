import { MoreVert, Widgets } from "@mui/icons-material";
import {
  Card,
  Avatar,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

const ChatHeader = ({ roomData }) => {
  console.log(roomData);
  return (
    <Card sx={{ display: "flex" }}>
      <CardHeader
        avatar={<Avatar> R</Avatar>}
        action={
          <IconButton aria-label="setting" sx={{ color: "white" }}>
            <Typography>
              <MoreVert />
            </Typography>
          </IconButton>
        }
        title={roomData.reciever.user.name}
        subheader={<Typography> {roomData.reciever.user.email} </Typography>}
      />
    </Card>
  );
};

export default ChatHeader;
