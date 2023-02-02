const Review = require("../models/Review");

// GET all batteries
const getReviews = async (req, res) => {
  const reviews = await Review.find().sort({ createdAt: -1 });

  res.status(200).json(reviews);
};

module.exports = { getReviews };
