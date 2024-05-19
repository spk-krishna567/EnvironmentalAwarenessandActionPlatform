// controllers/resourceController.js
const Resource = require("../models/Resource");

const getResources = async (req, res) => {
  const resources = await Resource.find();
  res.json(resources);
};

const createResource = async (req, res) => {
  const { title, content } = req.body;

  const resource = new Resource({
    title,
    content,
    createdBy: req.user._id,
  });

  const createdResource = await resource.save();
  res.status(201).json(createdResource);
};

module.exports = { getResources, createResource };
