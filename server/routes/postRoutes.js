// routes/postRoutes.js
const express = require("express");
const {
  getPosts,
  createPost,
  likePost,
  commentOnPost,
} = require("../controllers/postController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").post(protect, createPost).get(getPosts);
router.route("/:id/like").put(protect, likePost);
router.route("/:id/comment").post(protect, commentOnPost);

module.exports = router;
