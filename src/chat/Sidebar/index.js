import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Header from "./Header";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function Sidebar({ user, onlineUsers, setroomData, roomData }) {
  console.log(onlineUsers);

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChatRoom = (user) => {
    setroomData({
      ...roomData,
      room: "test",
      reciever: user,
    });
  };
  return (
    <Box sx={{ width: "30vw", bgcolor: "background.paper" }}>
      <Header user={user} />
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        variant="fullWidth"
        aria-label="Tabs"
      >
        <Tab iconPosition="top" icon={<PersonIcon />} label="Chat List" />
        <Tab iconPosition="top" icon={<ChatBubbleIcon />} label="User List" />
      </Tabs>

      {value === 0 && (
        <div>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {onlineUsers.map((user) => (
              <ListItem
                // key={user.id}
                alignItems="flex-start"
                onClick={() => handleChatRoom({ user })}
              >
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary={user.name}
                  secondary={
                    <React.Fragment key={user.id}>
                      <Typography
                        component="span"
                        variant="body2"
                        sx={{ color: "text.primary", display: "inline" }}
                      >
                        {user.email}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            ))}

            <Divider variant="inset" component="li" />
          </List>
        </div>
      )}
      {value === 1 && <div> User list </div>}
    </Box>
  );
}
