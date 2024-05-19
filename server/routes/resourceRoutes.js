// routes/resourceRoutes.js
const express = require("express");
const {
  getResources,
  createResource,
} = require("../controllers/resourceController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(getResources).post(protect, createResource);

module.exports = router;
