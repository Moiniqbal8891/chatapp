import { Box } from "@mui/material";
import ChatHeader from "./chatheader";
import ChatArea from "./chatarea";
import Footer from "./footer";
const ChatBox = () => {
  return (
    <Box
      sx={{
        width: "50vw",
        display: "flex",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <ChatHeader />
      <ChatArea />
      <Footer />
    </Box>
  );
};
export default ChatBox;
