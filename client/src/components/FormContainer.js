// src/components/FormContainer.js
import React from "react";
import { Container, Box } from "@mui/material";

const FormContainer = ({ children }) => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 8,
        }}
      >
        {children}
      </Box>
    </Container>
  );
};

export default FormContainer;
