const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const batterySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    productID: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Battery", batterySchema);
