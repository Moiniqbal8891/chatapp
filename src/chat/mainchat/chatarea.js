import Footer from "./footer";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Box, color, positions } from "@mui/system";
import ReplyIcon from "@mui/icons-material/Reply";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  IconButton,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { Directions, Replay } from "@mui/icons-material";
import zIndex from "@mui/material/styles/zIndex";
import Avatar from "@mui/material/Avatar";
const ChatArea = () => {
  return (
    <>
      <Box
        sx={{
          height: "500px",
          overflowY: "auto",
          background: "#f9f9f9",
        }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            position: "sticky",
            py: 2,
            top: 0,
            zIndex: 2,
            background: "#f5f5f5",
          }}
        >
          <Chip label="Today" />
        </Stack>
        <List sx={{ p: 0, overflowY: "auto", flex: "1 0 0" }}>
          <ListItem alignItems="flex">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <Paper sx={{ width: "25vw", p: 1.5 }}>
              <ListItemText
                primary="Moin Iqbal"
                secondary={<Typography variant="contain"> Kreadev</Typography>}
                sx={{ m: 0 }}
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ mt: 0.5 }}>12:30</Typography>
                <Box>
                  <IconButton sx={{ color: "primary.main" }}>
                    <ReplyIcon size="small" />
                  </IconButton>
                  <IconButton sx={{ color: "error.main" }}>
                    <DeleteIcon size="small" />
                  </IconButton>
                </Box>
              </Box>
            </Paper>
          </ListItem>
          <ListItem alignItems="flex" sx={{ flexDirection: "row-reverse" }}>
            <ListItemAvatar
              sx={{ display: "flex", flexDirection: "row-reverse" }}
            >
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ flexDirection: "row-reverse" }}
              />
            </ListItemAvatar>
            <Paper
              sx={{
                width: "25vw",
                p: 1.5,
                bgcolor: "primary.light",
                color: "primary.contrastText",
              }}
            >
              <ListItemText
                primary="Moin Iqbal"
                secondary={<Typography variant="contain"> Kreadev</Typography>}
                sx={{ m: 0 }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ mt: 0.5 }}>12:30</Typography>
                <Box>
                  <IconButton sx={{ color: "primary.contrastText" }}>
                    <ReplyIcon size="small" />
                  </IconButton>
                  <IconButton sx={{ color: "error.main" }}>
                    <DeleteIcon size="small" />
                  </IconButton>
                </Box>
              </Box>
            </Paper>
          </ListItem>
        </List>
      </Box>
    </>
  );
};
export default ChatArea;
