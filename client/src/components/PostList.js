// src/components/PostList.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listPosts, likePost, commentOnPost } from "../actions/postActions";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
} from "@mui/material";

const PostList = () => {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  const postList = useSelector((state) => state.postList);
  const { loading, error, posts } = postList;

  const auth = useSelector((state) => state.auth);
  const { userInfo } = auth;

  useEffect(() => {
    dispatch(listPosts());
  }, [dispatch]);

  const likeHandler = (id) => {
    dispatch(likePost(id));
  };

  const commentHandler = (id, comment) => {
    dispatch(commentOnPost(id, comment));
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Posts
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
                  <Typography variant="h5">{post.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {post.content}
                  </Typography>
                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.content}
                      style={{
                        width: "100%",
                        height: "auto",
                        marginTop: "10px",
                      }}
                    />
                  )}
                  <Typography variant="body2" color="textSecondary">
                    {post.likes.length} likes
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {post.comments.length} comments
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => likeHandler(post._id)}
                  >
                    {post.likes.find((like) => like.user === userInfo._id)
                      ? "Unlike"
                      : "Like"}
                  </Button>
                </CardActions>
                <CardContent>
                  <TextField
                    label="Comment"
                    fullWidth
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    sx={{ mb: 2 }}
                  />
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => commentHandler(post._id, comment)}
                  >
                    Comment
                  </Button>
                  {post.comments.map((comment) => (
                    <Typography
                      key={comment._id}
                      variant="body2"
                      color="textSecondary"
                    >
                      <strong>{comment.name}</strong> {comment.comment}
                    </Typography>
                  ))}
                </CardContent>
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
