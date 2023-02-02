const express = require("express");

const router = express.Router();
const { getReviews } = require("../controllers/reviewController");

// GET all batteries
router.get("/", getReviews);

module.exports = router;
