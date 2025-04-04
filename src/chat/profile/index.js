import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Box, Typography } from "@mui/material";
import ProfHeader from "./profheader";
const Profile = () => {
  return (
    <>
      <Box>
        <ProfHeader />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center", // Centers horizontally
            alignItems: "center", // Centers vertically
            height: "100vh", // Full viewport height
            bgcolor: "primary.main", // Background color
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column", // Aligns items vertically
              alignItems: "center", // Centers items horizontally
              gap: 1, // Adds spacing between Avatar and text
              p: 2, // Padding for spacing
              bgcolor: "white", // Background color for contrast
              borderRadius: "12px", // Rounded corners
              boxShadow: 3, // Adds shadow effect
            }}
          >
            <Avatar
              alt="Moin Iqbal"
              src="/moinpic.jpg"
              sx={{ width: 100, height: 100 }}
            />
            <Typography variant="h6" color="text.primary">
              Moin Iqbal
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Profile;
