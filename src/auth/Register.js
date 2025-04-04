import React from "react";
import { useState } from "react";
import axios from "axios";
import { TextField, Button, Box, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user",
        formData
      );
      console.log("Server response:", response.data);
      // Handle success (e.g., display a success message or redirect)
    } catch (error) {
      console.error("Submission error:", error);
      // Handle error (e.g., display an error message)
    }
  };
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
          Register
        </Typography>

        <TextField
          label="Id"
          name="id"
          type="id"
          onChange={handleChange}
          value={formData.id}
          fullWidth
          required
        />

        <TextField
          label="Name"
          name="name"
          type="Name"
          onChange={handleChange}
          value={formData.name}
          fullWidth
          required
        />
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
          onChange={handleChange}
          value={formData.password}
          label="Password"
          name="password"
          type="password"
          fullWidth
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Register
        </Button>
        <Typography sx={{ textAlign: "center" }}>
          Already have an account
          <Button color="primary" onClick={() => nav("/Login")}>
            Login
          </Button>
        </Typography>
      </Box>
    </Container>
  );
};
