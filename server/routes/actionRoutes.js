// routes/actionRoutes.js
const express = require("express");
const {
  getActions,
  logAction,
  getImpact,
} = require("../controllers/actionController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getActions).post(protect, logAction);
router.get("/impact", protect, getImpact);

module.exports = router;
