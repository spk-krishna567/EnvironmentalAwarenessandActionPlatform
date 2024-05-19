// routes/challengeRoutes.js
const express = require("express");
const {
  getChallenges,
  createChallenge,
} = require("../controllers/challengeController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(getChallenges).post(protect, createChallenge);

module.exports = router;
