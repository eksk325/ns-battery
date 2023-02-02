const Battery = require("../models/Battery");

// GET all batteries
const getBatteries = async (req, res) => {
  const batteries = await Battery.find().sort({ createdAt: -1 });

  res.status(200).json(batteries);
};

// GET  a single batteries
const getBattery = async (req, res) => {
  const { id } = req.params;
  const battery = await Battery.find({ productID: id });

  if (battery.length == 0) {
    return res.status(400).json({ error: "No such battery" });
  }

  res.status(200).json(battery);
};

// CREATE a new battery
const createBattery = async (req, res) => {
  const { name, productID } = req.body;

  try {
    const battery = await Battery.create({ name, productID });
    res.status(200).json(battery);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  res.json({ mssg: "POST a new battery" });
};

// DELETE a battery
const deleteBattery = async (req, res) => {
  const { id } = req.params;
  const battery = await Battery.find({ productID: id });

  if (battery.length == 0) {
    return res.status(400).json({ error: "No such battery" });
  }

  const deletedBattery = await Battery.findOneAndDelete({ productID: id });

  res.status(200).json(deletedBattery);
};

// UPDATE a battery
const updateBattery = async (req, res) => {
  const { id } = req.params;
  const battery = await Battery.find({ productID: id });

  if (battery.length == 0) {
    return res.status(400).json({ error: "No such battery" });
  }

  const updatedBattery = await Battery.findOneAndUpdate(
    { productID: id },
    { ...req.body }
  );

  res.status(200).json({ mssg: "UPDATE a battery" });
};

module.exports = {
  getBatteries,
  getBattery,
  createBattery,
  deleteBattery,
  updateBattery,
};
