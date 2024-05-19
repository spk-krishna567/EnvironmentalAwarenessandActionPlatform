// src/screens/RegisterScreen.js
import React from "react";
import { Container, Box } from "@mui/material";
import Register from "../components/Register";

const RegisterScreen = () => {
  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Register />
      </Box>
    </Container>
  );
};

export default RegisterScreen;
