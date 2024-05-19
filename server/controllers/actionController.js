// controllers/actionController.js
const Action = require("../models/Action");

const getActions = async (req, res) => {
  const actions = await Action.find({ user: req.user._id });
  res.json(actions);
};

const logAction = async (req, res) => {
  const { description, impact } = req.body;

  const action = new Action({
    user: req.user._id,
    description,
    impact,
  });

  const createdAction = await action.save();
  res.status(201).json(createdAction);
};

const getImpact = async (req, res) => {
  const actions = await Action.find({ user: req.user._id });
  const totalImpact = actions.reduce((sum, action) => sum + action.impact, 0);
  res.json({ totalImpact });
};

module.exports = { getActions, logAction, getImpact };
