import { MoreVert, Widgets } from "@mui/icons-material";
import {
  Card,
  Avatar,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Card sx={{ bgcolor: "primary.main", color: "white", display: "flex" }}>
      <CardHeader
        avatar={<Avatar> M </Avatar>}
        action={
          <IconButton aria-label="setting" sx={{ color: "white" }}>
            <Typography>
              <MoreVert />
            </Typography>
          </IconButton>
        }
        title="hello"
        subheader={<Typography> subheader</Typography>}
      />
    </Card>
  );
};

export default Header;
