const User = require("../models/user");
const {
  validateName,
  validateEmail,
  validateAge,
  validateGender,
  validateAddress,
  validateMobileNo,
} = require("../utils/validationUtils");

exports.createUser = async (req, res) => {
  try {
    console.log(req.body);
    validateUserData(req.body);
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    console.log(savedUser, newUser);
    return res.status(200).json({ message: "success", user: savedUser });
  } catch (error) {
    console.error("Error saving user:", error);
    return res.status(500).json({ message: "error", user: null });
  }
};

exports.readUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    return res.status(200).json({ user: user });
  } catch (error) {
    return res.status(200).json();
  }
};

exports.updateUser = async (req, res) => {
  try {
    validateUserData(req.body);
    const user = await User.findByIdAndUpdate(req.params.userId, req.body, {
      new: true,
    });
    if (!user) {
      throw new Error("User not found");
    }
    return res.status(200).json({ user: user });
  } catch (error) {
    return res.status(404).json();
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.userId);
    if (!user) {
      throw new Error("User not found");
    }
    return res.status(200).json({ user: user });
  } catch (error) {
    return res.status(404).json();
  }
};

function validateUserData(userData) {
  const { name, email, age, gender, address, mobileNo } = userData;

  if (!validateName(name)) {
    throw new Error(
      "Name must be a string with a maximum length of 50 characters"
    );
  }

  if (!validateEmail(email)) {
    throw new Error("Invalid email address");
  }

  if (!validateAge(age)) {
    throw new Error("Age must be a number between 18 and 100");
  }

  if (!validateGender(gender)) {
    throw new Error("Gender must be 'Male', 'Female', or 'Other'");
  }

  if (address && !validateAddress(address)) {
    throw new Error(
      "Address must be a string with a maximum length of 100 characters"
    );
  }

  if (!validateMobileNo(mobileNo)) {
    throw new Error("Invalid mobile number");
  }
}
