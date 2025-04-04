import React from "react";
import { TextField, Button, Box, Typography, Container } from "@mui/material";
import { useNavigate } from 'react-router-dom';


export const Login = () => {
  const nav = useNavigate();

  return (
    <Container maxWidth="xs">
      <Box
        component="form"
        sx={{
          mt: 8,
          p: 3,
          boxShadow: 3,
          borderRadius: 2,
          bgcolor: "white",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h5" align="center">
          Login
        </Typography>
       
        <TextField label="Email" name="email" type="email" fullWidth required />
        <TextField
          label="Password"
          name="password"
          type="password"
          fullWidth
          required
        />
        <Button type="submit"  variant="contained" color="primary" fullWidth>
          Login
        </Button>
        <Button color="error"> 
          Forgot Password
        </Button>
      
      <Typography> Don't have an account
        <Button color="success" onClick={()=>nav("/Register")}>
      Create an account
        </Button>
        </Typography>
      </Box>
    </Container>
  );
};
