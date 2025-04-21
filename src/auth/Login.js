import React, { useEffect } from "react";
import axios from "axios";

import { TextField, Button, Box, Typography, Container } from "@mui/material";
import { useNavigate, useResolvedPath } from "react-router-dom";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";

export const Login = () => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  //is exist
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    // Call your authentication API here
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/login",
        formData
      );

      console.log("response", response);
      if (response.data.success && response.data.token) {
        localStorage.setItem("token", response.data.token);
        nav("/chat");

      console.log("Server response:", response.data);
      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        const user = jwtDecode(response.data.token);
        nav("/chat", { state: user });

      } else {
        alert("pls try again");
      }
    } catch (error) {
      console.error("Submission error:", error);
      // Handle error (e.g., display an error message)
    }
  };

  const token = localStorage.getItem("token");
  console.log(token);
  useEffect(() => {
    if (token) {
      nav("/chat"); // Redirect if already logged in
    }
  }, []);

  return (
    <Container maxWidth="xs">
      <Box
        component="form"
        onSubmit={handleSubmit}
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

        <TextField
          label="Email"
          name="email"
          type="email"
          onChange={handleChange}
          value={formData.email}
          fullWidth
          required
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          onChange={handleChange}
          value={formData.password}
          fullWidth
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
        <Button color="error">Forgot Password</Button>

        <Typography>
          {" "}
          Don't have an account
          <Button color="success" onClick={() => nav("/Register")}>
            Create an account
          </Button>
        </Typography>
      </Box>
    </Container>
  );
};
