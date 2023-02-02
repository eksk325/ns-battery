const express = require("express");
const { update } = require("lodash");
const router = express.Router();
const {
  createBattery,
  getBatteries,
  getBattery,
  deleteBattery,
  updateBattery,
} = require("../controllers/batteryController");

// GET all batteries
router.get("/", getBatteries);

// GET one single battery
router.get("/:id", getBattery);

// POST a new battery
router.post("/", createBattery);

// DELETE a battery
router.delete("/:id", deleteBattery);

// UPDATE a battery
router.patch("/:id", updateBattery);

module.exports = router;
