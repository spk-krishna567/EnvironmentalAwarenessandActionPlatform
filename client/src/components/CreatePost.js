import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../actions/postActions";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";

const CreatePost = () => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const dispatch = useDispatch();

  const postCreate = useSelector((state) => state.postCreate);
  const { loading, error, success } = postCreate;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createPost({ content, image }));
  };

  return (
    <Paper sx={{ p: 4, mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Create Post
      </Typography>
      {error && <Typography color="error">{error}</Typography>}
      {success && (
        <Typography color="primary">Post created successfully</Typography>
      )}
      <Box component="form" onSubmit={submitHandler} sx={{ mt: 2 }}>
        <TextField
          label="Content"
          fullWidth
          value={content}
          onChange={(e) => setContent(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Image URL"
          fullWidth
          value={image}
          onChange={(e) => setImage(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary">
          Create Post
        </Button>
      </Box>
    </Paper>
  );
};

export default CreatePost;
