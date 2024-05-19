// controllers/initiativeController.js
const Initiative = require("../models/Initiative");

const getInitiatives = async (req, res) => {
  const initiatives = await Initiative.find();
  res.json(initiatives);
};

const getInitiativeById = async (req, res) => {
  const initiative = await Initiative.findById(req.params.id);

  if (initiative) {
    res.json(initiative);
  } else {
    res.status(404).json({ message: "Initiative not found" });
  }
};

// Create a new initiative
const createInitiative = async (req, res) => {
  const { name, description } = req.body;

  try {
    const initiative = new Initiative({
      name,
      description,
      createdBy: req.user._id,
    });

    const createdInitiative = await initiative.save();
    res.status(201).json(createdInitiative);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateInitiative = async (req, res) => {
  const initiative = await Initiative.findById(req.params.id);

  if (initiative) {
    initiative.title = req.body.title || initiative.title;
    initiative.description = req.body.description || initiative.description;

    const updatedInitiative = await initiative.save();
    res.json(updatedInitiative);
  } else {
    res.status(404).json({ message: "Initiative not found" });
  }
};

const deleteInitiative = async (req, res) => {
  const initiative = await Initiative.findById(req.params.id);

  if (initiative) {
    await initiative.remove();
    res.json({ message: "Initiative removed" });
  } else {
    res.status(404).json({ message: "Initiative not found" });
  }
};

const joinInitiative = async (req, res) => {
  const initiative = await Initiative.findById(req.params.id);

  if (initiative) {
    if (!initiative.participants.includes(req.user._id)) {
      initiative.participants.push(req.user._id);
      await initiative.save();
      res.json({ message: "Joined initiative" });
    } else {
      res.status(400).json({ message: "Already joined" });
    }
  } else {
    res.status(404).json({ message: "Initiative not found" });
  }
};

module.exports = {
  getInitiatives,
  getInitiativeById,
  createInitiative,
  updateInitiative,
  deleteInitiative,
  joinInitiative,
};
