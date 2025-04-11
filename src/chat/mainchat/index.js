import { Box } from "@mui/material";
import ChatHeader from "./chatheader";
import ChatArea from "./chatarea";
import Footer from "./footer";
const ChatBox = ({ roomData, handleMessage }) => {
  console.log(roomData);
  return (
    <Box
      sx={{
        width: "50vw",
        display: "flex",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      {roomData.room ? (
        <>
          <ChatHeader roomData={roomData} />
          <ChatArea />
          <Footer handleMessage={handleMessage} />
        </>
      ) : (
        <> Please select user to chat</>
      )}
    </Box>
  );
};
export default ChatBox;
