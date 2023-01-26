require("dotenv").config();

const express = require("express");
const batteryRoutes = require("./routes/batteries");
const formRoutes = require("./routes/forms");
const msgRoutes = require("./routes/messages");
const reviewRoutes = require("./routes/reviews");

const mongoose = require("mongoose");
const path = require("path");

// Express App
const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname + "tmp")));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api/batteries", batteryRoutes);
app.use("/send-form", formRoutes);
app.use("/send-msg", msgRoutes);
app.use("/api/reviews", reviewRoutes);

// Conncect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Listen for requests only after connecting to the database
    app.listen(process.env.PORT, () => {
      console.log(`Connected to db and listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
