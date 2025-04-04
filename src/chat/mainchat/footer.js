import { Button, TextField } from "@mui/material";
import { Box } from "@mui/material";
// import TextField from "@mui/material";
import { InsertEmoticon, MoreVert } from "@mui/icons-material";
// import { InsertEmoticon } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ P: 1, display: "flex" }}>
      <Button sx={{ minWidth: "auto", mr: 1 }}>
        <MoreVert />
      </Button>
      <Button sx={{ minWidth: "auto", mr: 1 }}>
        <InsertEmoticon />
      </Button>
      <Box sx={{ display: "flex", mr: 1 }}>
        <TextField placeholder="Type your message here" />
      </Box>
      <Button
        variant="outlined"
        sx={{ display: "flex", mr: 1, height: "auto", mindwidth: "auto" }}
      >
        Send
      </Button>
    </Box>
  );
};

export default Footer;
