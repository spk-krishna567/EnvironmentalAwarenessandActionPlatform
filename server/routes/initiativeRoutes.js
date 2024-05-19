// routes/initiativeRoutes.js
const express = require("express");
const {
  getInitiatives,
  getInitiativeById,
  createInitiative,
  updateInitiative,
  deleteInitiative,
  joinInitiative,
} = require("../controllers/initiativeController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(getInitiatives).post(protect, createInitiative);
router
  .route("/:id")
  .get(getInitiativeById)
  .put(protect, updateInitiative)
  .delete(protect, deleteInitiative);

router.route("/:id/join").post(protect, joinInitiative);

module.exports = router;
