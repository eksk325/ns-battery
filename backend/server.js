require("dotenv").config();

const express = require("express");
const batteryRoutes = require("./routes/batteries");
const mongoose = require("mongoose");

// Express App
const app = express();

// Middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api/batteries", batteryRoutes);

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
