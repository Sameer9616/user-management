const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const mobileNoRegex = /^\d{10}$/;

exports.validateName = (name) => {
  return typeof name === "string" && name.length <= 50;
};

exports.validateEmail = (email) => {
  return emailRegex.test(email);
};

exports.validateAge = (age) => {
  return typeof age === "number" && age >= 18 && age <= 100;
};

exports.validateGender = (gender) => {
  return ["Male", "Female", "Other"].includes(gender);
};

exports.validateAddress = (address) => {
  return typeof address === "string" && address.length <= 100;
};

exports.validateMobileNo = (mobileNo) => {
  return mobileNoRegex.test(mobileNo);
};
