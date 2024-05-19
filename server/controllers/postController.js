// controllers/postController.js
const Post = require("../models/Post");
const mongoose = require("mongoose");

const getPosts = async (req, res) => {
  const posts = await Post.find({}).sort({ createdAt: -1 });
  res.json(posts);
};

const createPost = async (req, res) => {
  const { content, image } = req.body;

  const post = new Post({
    user: req.user._id,
    name: req.user.name,
    content,
    image,
  });

  const createdPost = await post.save();
  res.status(201).json(createdPost);
};

const likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post) {
      console.log("Post ID:", req.params.id); // Log post ID
      console.log("User ID:", req.user._id);
      const userId = new mongoose.Types.ObjectId(req.user._id).toString();

      // // Debugging: Log the likes array
      // console.log("Current likes:", post.likes);

      const alreadyLiked = post.likes.find((like) => {
        return like.user && like.user.toString() === userId;
      });

      // // Debugging: Log the result of the find operation
      // console.log("Already liked:", alreadyLiked);

      if (alreadyLiked) {
        post.likes = post.likes.filter(
          (like) => like.user && like.user.toString() !== userId
        );
      } else {
        post.likes.push({ user: req.user._id });
      }
      console.log("Updated likes:", post.likes);
      await post.save();
      res.json({ message: "Post liked/unliked" });
    } else {
      res.status(404);
      res.json({ message: "Post not found" });
    }
  } catch (error) {
    console.error("Error in likePost:", error);
    res.status(500).json({ message: error.message });
  }
};

const commentOnPost = async (req, res) => {
  const { comment } = req.body;

  const post = await Post.findById(req.params.id);

  if (post) {
    const newComment = {
      user: req.user._id,
      name: req.user.name,
      comment,
    };

    post.comments.push(newComment);

    await post.save();
    res.status(201).json({ message: "Comment added" });
  } else {
    res.status(404);
    throw new Error("Post not found");
  }
};
const deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post) {
    if (post.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error("User not authorized");
    }

    await post.remove();
    res.json({ message: "Post removed" });
  } else {
    res.status(404);
    throw new Error("Post not found");
  }
};

module.exports = { getPosts, createPost, likePost, commentOnPost, deletePost };
