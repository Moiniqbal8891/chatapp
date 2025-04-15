import { Button, TextField } from "@mui/material";
import { Box } from "@mui/material";
// import TextField from "@mui/material";
import { InsertEmoticon, MoreVert } from "@mui/icons-material";
// import { InsertEmoticon } from "@mui/icons-material";
import { useState } from "react";
// footer message code start
const Footer = ({ handleMessage }) => {
  const [Message, setMessage] = useState("");
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Message) {
      handleMessage(Message);
    }
    setMessage("");
  };

  // footer message code end here

  return (
    <Box sx={{ P: 1, display: "flex" }}>
      <Button sx={{ minWidth: "auto", mr: 1 }}>
        <MoreVert />
      </Button>
      <Button sx={{ minWidth: "auto", mr: 1 }}>
        <InsertEmoticon />
      </Button>
      <Box
        sx={{ display: "flex", mr: 1 }}
        component="form"
        onSubmit={handleSubmit}
      >
        <TextField
          fullWidth
          placeholder="Type your message..."
          value={Message}
          onChange={handleChange}
        />
        <Button
          variant="outlined"
          sx={{ display: "flex", mr: 1, height: "auto", mindwidth: "auto" }}
          type="submit"
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
