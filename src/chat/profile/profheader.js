import { MoreVert, Widgets } from "@mui/icons-material";
import {
  Card,
  Avatar,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

const ProfHeader = (user) => {
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
        title="Moin Iqbal"
        subheader={<Typography> Kreadev</Typography>}
      />
    </Card>
  );
};

export default ProfHeader;
