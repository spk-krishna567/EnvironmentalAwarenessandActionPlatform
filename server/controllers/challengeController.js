// controllers/challengeController.js
const Challenge = require("../models/Challenge");

const getChallenges = async (req, res) => {
  const challenges = await Challenge.find();
  res.json(challenges);
};

const createChallenge = async (req, res) => {
  const { title, description, reward } = req.body;

  const challenge = new Challenge({
    title,
    description,
    reward,
  });

  const createdChallenge = await challenge.save();
  res.status(201).json(createdChallenge);
};

module.exports = { getChallenges, createChallenge };
