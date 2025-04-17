import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import ProfHeader from "./profheader";
import { useState, useEffect } from "react";
const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const nav = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");

    sessionStorage.removeItem("token");
    // Update the logged-in state
    nav("/");
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
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
          <Button variant="contained" color="error" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Profile;
