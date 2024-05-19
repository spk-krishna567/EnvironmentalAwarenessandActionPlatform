import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createInitiative } from "../actions/initiativeActions";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";

const CreateInitiative = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const initiativeCreate = useSelector((state) => state.initiativeCreate);
  const { loading, error, success } = initiativeCreate;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createInitiative({ name, description }));
  };

  return (
    <Paper sx={{ p: 4, mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Create Initiative
      </Typography>
      {loading && <Typography>Loading...</Typography>}
      {error && <Typography color="error">{error}</Typography>}
      {success && (
        <Typography color="primary">Initiative created successfully</Typography>
      )}
      <Box component="form" onSubmit={submitHandler} sx={{ mt: 2 }}>
        <TextField
          label="Initiative Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Description"
          fullWidth
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary">
          Create
        </Button>
      </Box>
    </Paper>
  );
};

export default CreateInitiative;
