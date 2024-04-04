const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("", userRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

app.listen(PORT, () => {
  console.log("Listening on http://localhost:" + PORT);
});
