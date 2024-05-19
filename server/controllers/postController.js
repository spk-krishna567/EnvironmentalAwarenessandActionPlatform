// controllers/postController.js
const Post = require("../models/Post");

const getPosts = async (req, res) => {
  const posts = await Post.find().populate("user", "name");
  res.json(posts);
};

const createPost = async (req, res) => {
  const { content } = req.body;

  const post = new Post({
    user: req.user._id,
    content,
  });

  const createdPost = await post.save();
  res.status(201).json(createdPost);
};

const likePost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post) {
    if (!post.likes.includes(req.user._id)) {
      post.likes.push(req.user._id);
      await post.save();
      res.json({ message: "Post liked" });
    } else {
      res.status(400).json({ message: "Already liked" });
    }
  } else {
    res.status(404).json({ message: "Post not found" });
  }
};

const commentOnPost = async (req, res) => {
  const { text } = req.body;

  const post = await Post.findById(req.params.id);

  if (post) {
    const comment = {
      user: req.user._id,
      text,
    };

    post.comments.push(comment);
    await post.save();
    res.json({ message: "Comment added" });
  } else {
    res.status(404).json({ message: "Post not found" });
  }
};

module.exports = { getPosts, createPost, likePost, commentOnPost };
