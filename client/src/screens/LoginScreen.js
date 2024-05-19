// src/screens/LoginScreen.js
import React from "react";
import { Container, Box } from "@mui/material";
import Login from "../components/Login";

const LoginScreen = () => {
  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Login />
      </Box>
    </Container>
  );
};

export default LoginScreen;
