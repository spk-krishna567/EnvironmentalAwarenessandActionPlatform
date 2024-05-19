// src/components/PostList.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listPosts } from "../actions/postActions";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
} from "@mui/material";

const PostList = () => {
  const dispatch = useDispatch();

  const postList = useSelector((state) => state.postList);
  const { loading, error, posts } = postList;

  useEffect(() => {
    dispatch(listPosts());
  }, [dispatch]);

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Community Posts
      </Typography>
      {loading ? (
        <Typography>Loading...</Typography>
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : posts && posts.length ? (
        <Grid container spacing={3}>
          {posts.map((post) => (
            <Grid item key={post._id} xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5">{post.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {post.content}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Like
                  </Button>
                  <Button size="small" color="primary">
                    Comment
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography>No Posts are posted.</Typography>
      )}
    </Box>
  );
};

export default PostList;
