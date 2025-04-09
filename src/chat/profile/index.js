import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom"; // For navigation to other routes
import ProfHeader from "./profheader";

const Profile = ({ user }) => {
  const navigate = useNavigate(); // Hook for navigation
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

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
        </Box>
      </Box>
    </>
  );
};

export default Profile;
