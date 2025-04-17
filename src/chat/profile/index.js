import * as React from "react";
import Avatar from "@mui/material/Avatar";
<<<<<<< HEAD
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
=======
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom"; // For navigation to other routes
import ProfHeader from "./profheader";

const Profile = ({ user }) => {
  const navigate = useNavigate(); // Hook for navigation
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

>>>>>>> 1679cef42252e29e857eb9c8f644b3977e5e37a3
  return (
    <>
      <Box>
        <ProfHeader user={user} />
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
              gap: 2, // Adds spacing between Avatar and text
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
              {user.name}
            </Typography>
            <Typography variant="h6" color="text.primary">
              {user.email}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleLogout}
              sx={{ mt: 2 }}
            >
              Logout
            </Button>
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
