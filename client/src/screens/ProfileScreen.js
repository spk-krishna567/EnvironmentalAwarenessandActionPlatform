// src/screens/ProfileScreen.js
import React from "react";
import { Container, Box } from "@mui/material";
import Profile from "../components/Profile";

const ProfileScreen = () => {
  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Profile />
      </Box>
    </Container>
  );
};

export default ProfileScreen;
