// src/screens/DashboardScreen.js
import React from "react";
import { Container, Box, Typography } from "@mui/material";
import InitiativeList from "../components/InitiativeList";
import PostList from "../components/PostList";

const DashboardScreen = () => {
  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h3" gutterBottom>
          Dashboard
        </Typography>
        <InitiativeList />
        <PostList />
      </Box>
    </Container>
  );
};

export default DashboardScreen;
