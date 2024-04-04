const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 50 },
  email: { type: String, required: true },
  age: { type: Number, required: true, min: 18, max: 100 },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  address: { type: String, maxlength: 100 },
  mobileNo: {
    type: String,
    required: true,
    validate: /^(\+\d{1,2}\s?)?\d{10}$/,
  },
});

module.exports = mongoose.model("User", userSchema);
